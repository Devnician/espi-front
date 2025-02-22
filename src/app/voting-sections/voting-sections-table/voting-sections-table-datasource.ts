import { DataSource } from '@angular/cdk/collections';
import { Injector } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatSort } from '@angular/material/sort';
import { QueryRef } from 'apollo-angular';
import { BehaviorSubject, merge, Observable } from 'rxjs';
import { map, startWith, switchMap, tap } from 'rxjs/operators';
import {
  GetVotingSectionsQuery,
  Order_By,
  Voting_Section,
  Voting_Section_Bool_Exp,
  Voting_Section_Order_By,
} from 'src/generated/graphql';
import { VotingSectionsService } from '../voting-section.service';

/**
 * Data source for the VotingSectionsTable view. This class should
 * encapsulate all logic for fetching and manipulating the displayed data
 * (including sorting, pagination, and filtering).
 */
export class VotingSectionsTableDataSource extends DataSource<Voting_Section> {
  data$: Observable<GetVotingSectionsQuery['voting_section']>;
  paginator: MatPaginator;
  counter: BehaviorSubject<number> = new BehaviorSubject(0);
  sort: MatSort;
  queryRef: QueryRef<GetVotingSectionsQuery>;

  condition: BehaviorSubject<Voting_Section_Bool_Exp> = new BehaviorSubject({});

  loading: BehaviorSubject<any> = new BehaviorSubject(true);
  loading$ = this.loading.asObservable();
  votingSectionsService: VotingSectionsService;
  private snackBar: MatSnackBar;
  constructor(private injector: Injector) {
    super();
    this.votingSectionsService = this.injector.get(VotingSectionsService);
    this.snackBar = this.injector.get(MatSnackBar);
  }

  /**
   * Connect this data source to the table. The table will only update when
   * the returned stream emits new items.
   * @returns A stream of the items to be rendered.
   */
  connect(): Observable<Voting_Section[] | any> {
    const limit: number = this.paginator.pageSize;
    const offset: number = this.paginator.pageIndex * this.paginator.pageSize;
    const order_by: Voting_Section_Order_By = { createdAt: Order_By.Desc };

    // Combine everything that affects the rendered data into one update
    // stream for the data-table to consume.
    this.queryRef = this.votingSectionsService.getVotingSections(
      limit,
      offset,
      this.condition.value,
      order_by
    );
    // Combine everything that affects the rendered data into one update
    // stream for the data-table to consume.
    const dataMutations = [
      this.queryRef.valueChanges,
      this.condition,
      // this.paginator.page,
      // this.sort.sortChange,
    ];

    return merge(
      this.paginator.page,
      this.sort.sortChange,
      ...dataMutations
    ).pipe(
      startWith({}),
      tap(() => this.loading.next(true)),
      switchMap((fromWhere) => {
        let order: any = new Object({});
        if (this.sort.active && this.sort.active.length > 0) {
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
            orderBy: order,
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
        this.counter.next(data.voting_section_aggregate.aggregate.count);
        return data.voting_section;
      })
    );
  }

  /**
   *  Called when the table is being destroyed. Use this function, to clean up
   * any open connections or free any held resources that were set up during connect.
   */
  disconnect(): void {}
}
