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
  Order_By,
  Users,
  Users_Order_By,
} from 'src/generated/graphql';

/**
 * Data source for the OrdersTable view. This class should
 * encapsulate all logic for fetching and manipulating the displayed data
 * (including sorting, pagination, and filtering).
 */
export class OrdersTableDataSource extends DataSource<Users> {
  data$: Observable<GetUsersQuery['users']>;
  paginator: MatPaginator;
  counter: BehaviorSubject<number> = new BehaviorSubject(0);
  sort: MatSort;
  queryRef: QueryRef<GetUsersQuery>;

  loading: BehaviorSubject<any> = new BehaviorSubject(true);
  loading$ = this.loading.asObservable();
  currentPageData: BehaviorSubject<Users[]> = new BehaviorSubject([]);

  constructor(
    private usersService: UsersService,
    private snackBar: MatSnackBar
  ) {
    super();
  }

  /**
   * Connect this data source to the table. The table will only update when
   * the returned stream emits new items.
   * @returns A stream of the items to be rendered.
   */
  connect(): Observable<Users[] | any> {
    const limit: number = this.paginator.pageSize;
    const offset: number = this.paginator.pageIndex * this.paginator.pageSize;
    const order_by: Users_Order_By = { createdAt: Order_By.Desc };

    // Combine everything that affects the rendered data into one update
    // stream for the data-table to consume.
    this.queryRef = this.usersService.getUsers(limit, offset, {}, order_by);
    // Combine everything that affects the rendered data into one update
    // stream for the data-table to consume.
    const dataMutations = [
      this.queryRef.valueChanges,
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
            condition: {},
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
        this.counter.next(data.users_aggregate.aggregate.count);
        this.currentPageData.next(data.users as Users[]);
        return data.users;
      })
    );
  }

  /**
   *  Called when the table is being destroyed. Use this function, to clean up
   * any open connections or free any held resources that were set up during connect.
   */
  disconnect(): void {
    // *
  }
}
