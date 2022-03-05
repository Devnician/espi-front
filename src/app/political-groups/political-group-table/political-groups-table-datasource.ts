import { DataSource } from '@angular/cdk/collections';
import { MatPaginator } from '@angular/material/paginator';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatSort } from '@angular/material/sort';
import { QueryRef } from 'apollo-angular';
import { BehaviorSubject, merge, Observable } from 'rxjs';
import { map, startWith, switchMap, tap } from 'rxjs/operators';
import {
  GetPoliticalGroupsQuery,
  Order_By,
  Political_Groups,
  Political_Groups_Bool_Exp,
  Political_Groups_Order_By,
} from 'src/generated/graphql';
import { PoliticalGroupsService } from '../political-groups-service';

/**
 * Data source for the PoliticalGroupTable view. This class should
 * encapsulate all logic for fetching and manipulating the displayed data
 * (including sorting, pagination, and filtering).
 */
export class PoliticalGroupTableDataSource extends DataSource<Political_Groups> {
  paginator: MatPaginator;
  counter: BehaviorSubject<number> = new BehaviorSubject(0);
  sort: MatSort;
  queryRef: QueryRef<GetPoliticalGroupsQuery>;
  loading: BehaviorSubject<any> = new BehaviorSubject(true);
  loading$ = this.loading.asObservable();
  currentPageData: Political_Groups[] = [];
  condition: BehaviorSubject<Political_Groups_Bool_Exp> = new BehaviorSubject(
    {}
  );
  constructor(
    private politicalGroupsService: PoliticalGroupsService,
    private snackBar: MatSnackBar
  ) {
    super();
  }

  /**
   * Connect this data source to the table. The table will only update when
   * the returned stream emits new items.
   * @returns A stream of the items to be rendered.
   */
  connect(): Observable<Political_Groups[] | any> {
    const limit: number = this.paginator.pageSize;
    const offset: number = this.paginator.pageIndex * this.paginator.pageSize;
    const order_by: Political_Groups_Order_By = { createdAt: Order_By.Asc };

    // Combine everything that affects the rendered data into one update
    // stream for the data-table to consume.
    this.queryRef = this.politicalGroupsService.getPoliticalGroups(
      limit,
      offset,
      {},
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
        this.counter.next(data.political_groups_aggregate.aggregate.count);
        this.currentPageData =
          data.political_groups as any as Political_Groups[];
        return data.political_groups;
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
