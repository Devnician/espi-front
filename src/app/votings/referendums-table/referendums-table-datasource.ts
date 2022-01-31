import { DataSource } from '@angular/cdk/collections';
import { MatPaginator } from '@angular/material/paginator';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatSort } from '@angular/material/sort';
import { QueryRef } from 'apollo-angular';
import { BehaviorSubject, merge, Observable } from 'rxjs';
import { map, startWith, switchMap, tap } from 'rxjs/operators';
import {
  GetReferendumsQuery,
  Order_By,
  Referendums,
  Referendums_Order_By,
} from 'src/generated/graphql';
import { VotingsService } from '../voting-service.service';

/**
 * Data source for the ReferendumsTable view. This class should
 * encapsulate all logic for fetching and manipulating the displayed data
 * (including sorting, pagination, and filtering).
 */
export class ReferendumsTableDataSource extends DataSource<Referendums> {
  data$: Observable<GetReferendumsQuery['referendums']>;
  paginator: MatPaginator;
  counter: BehaviorSubject<number> = new BehaviorSubject(0);
  sort: MatSort;
  queryRef: QueryRef<GetReferendumsQuery>;

  loading: BehaviorSubject<any> = new BehaviorSubject(true);
  loading$ = this.loading.asObservable();
  currentPageData: BehaviorSubject<Referendums[]> = new BehaviorSubject([]);

  constructor(
    private votingsService: VotingsService,
    private snackBar: MatSnackBar
  ) {
    super();
  }

  /**
   * Connect this data source to the table. The table will only update when
   * the returned stream emits new items.
   * @returns A stream of the items to be rendered.
   */
  connect(): Observable<Referendums[]> {
    const limit: number = this.paginator.pageSize;
    const offset: number = this.paginator.pageIndex * this.paginator.pageSize;
    const order_by: Referendums_Order_By = { id: Order_By.Asc };

    this.queryRef = this.votingsService.getReferendums(
      limit,
      offset,
      {},
      order_by
    );
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
          this.counter.next(0);
          console.log(errorMessage);
          this.currentPageData.next([]);
          // throw Error(errorMessage);
          return [];
        }
        this.counter.next(data.referendums_aggregate.aggregate.count);
        this.currentPageData.next(data.referendums as Referendums[]);
        return this.currentPageData.value; //data.referendums as Referendums[];
      })
    );
  }

  /**
   *  Called when the table is being destroyed. Use this function, to clean up
   * any open connections or free any held resources that were set up during connect.
   */
  disconnect(): void {}
}
