import { DataSource } from '@angular/cdk/collections';
import { MatPaginator } from '@angular/material/paginator';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatSort } from '@angular/material/sort';
import { QueryRef } from 'apollo-angular';
import { BehaviorSubject, merge, Observable } from 'rxjs';
import { map, startWith, switchMap, tap } from 'rxjs/operators';
import { UsersService } from 'src/app/users/users-service';
import {
  GetUsersQuery,
  Referendum_Votes,
  Users_Bool_Exp,
  Users_Order_By,
  Votes,
} from 'src/generated/graphql';
import { Election } from '../election.class';
import { CustomUser } from './custom-user.class';

/**
 * Data source for the OrdersTable view. This class should
 * encapsulate all logic for fetching and manipulating the displayed data
 * (including sorting, pagination, and filtering).
 */
export class UsersTableDataSource extends DataSource<CustomUser> {
  paginator: MatPaginator;
  counter: BehaviorSubject<number> = new BehaviorSubject(0);
  sort: MatSort;
  queryRef: QueryRef<GetUsersQuery>;
  loading: BehaviorSubject<any> = new BehaviorSubject(true);
  loading$ = this.loading.asObservable();
  currentPageData: CustomUser[] = [];
  condition: BehaviorSubject<Users_Bool_Exp> = new BehaviorSubject({});
  selectedElection: BehaviorSubject<Election> = new BehaviorSubject(undefined);
  /**
   *
   */
  constructor(
    private usersService: UsersService,
    private snackBar: MatSnackBar
  ) {
    super();
    this.selectedElection.subscribe((selection) => {
      if (selection) {
        this.decorateUsers(this.currentPageData);
      }
    });
  }

  /**
   * Connect this data source to the table. The table will only update when
   * the returned stream emits new items.
   * @returns A stream of the items to be rendered.
   */
  connect(): Observable<CustomUser[] | any> {
    const limit: number = this.paginator.pageSize;
    const offset: number = this.paginator.pageIndex * this.paginator.pageSize;
    const order_by: Users_Order_By = {}; // { name: Order_By.Asc };

    // Combine everything that affects the rendered data into one update
    // stream for the data-table to consume.
    this.queryRef = this.usersService.getUsers(limit, offset, {}, order_by);
    // console.log(this.condition.getValue());
    // Combine everything that affects the rendered data into one update
    // stream for the data-table to consume.
    const dataMutations = [
      this.queryRef.valueChanges,
      this.condition,
      this.paginator.page,
      this.sort.sortChange,
    ];

    return merge(
      this.paginator.page,
      this.sort.sortChange,
      ...dataMutations
    ).pipe(
      startWith({}),
      tap(() => this.loading.next(true)),
      switchMap((fromWhere) => {
        let order: any; //= new Object({});
        if (this.sort.active && this.sort.active.length > 0) {
          order = new Object({});
          const field = this.sort.active;

          this.sort.direction.indexOf('sc') !== -1
            ? (order[this.sort.active] = this.sort.direction)
            : (order = {});
        }

        if (Object.keys(fromWhere).indexOf('data') < 0) {
          return this.queryRef.refetch({
            limit: this.paginator.pageSize,
            offset: this.paginator.pageIndex * this.paginator.pageSize,
            condition: this.condition.value,
            orderBy: order ? order : order_by,
          });
        } else {
          return this.queryRef.valueChanges;
        }
      }),
      map(({ data, loading, errors }) => {
        this.loading.next(loading);
        if (errors) {
          console.log(errors);
          console.log(data);
          const errorMessage = errors[0].message;
          console.log(errorMessage);
          if (errorMessage.includes('query_root')) {
            this.snackBar.open(
              'Нямате необходимите права за достъп до тези данни!',
              'OK',
              { duration: 2000 }
            );
          }
          // this.snackBar.open(error, 'OK', { duration: 2000 });
          throw Error(errorMessage);
        }

        this.counter.next(data.users_aggregate.aggregate.count);
        const collection = this.decorateUsers(data.users as CustomUser[]);
        this.currentPageData = collection;
        return collection;
      })
    );
  }
  private decorateUsers(users: CustomUser[]) {
    const collection = users;
    users.forEach((user) => {
      this.votedForTheCurrentElection(user);
    });
    return collection;
  }

  private votedForTheCurrentElection(user: CustomUser): void {
    user.voted = false;
    user.eVoted = false;
    if (this.selectedElection.value) {
      const election = this.selectedElection.value;
      const type = election.type;
      console.log(type);
      if (type === 'referendum') {
        // get all for this referendum.
        const referendumVotes: Referendum_Votes[] =
          user.referendum_votes.filter(
            (vote) => vote.referendum_question.referendum.id === election.id
          );

        user.filteredReferendumVotes = referendumVotes;
        if (referendumVotes.length > 0) {
          const voted = referendumVotes.findIndex((v) => v.vote === true) > -1;
          const eVoted =
            referendumVotes.findIndex((v) => v.eVote === true) > -1;
          user.voted = voted;
          user.eVoted = eVoted;
          user.filteredReferendumVotes = referendumVotes;
        }
      } else {
        if (user.votes.length > 0) {
          const vote: Votes = user.votes.find(
            (e) => (e.votingId = election.id)
          );
          if (vote) {
            user.eVoted = vote.inSection === false;
            user.voted = vote.inSection === true;
            user.vote = vote;
          }
        }
      }
    }
  }

  /**
   *  Called when the table is being destroyed. Use this function, to clean up
   * any open connections or free any held resources that were set up during connect.
   */
  disconnect(): void {
    // *
  }
}
