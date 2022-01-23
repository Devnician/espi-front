import { DataSource } from '@angular/cdk/collections';
import { BehaviorSubject, Observable } from 'rxjs';
import { Referendum_Questions } from 'src/generated/graphql';

/**
 * Data source for the EditReferendumTable view. This class should
 * encapsulate all logic for fetching and manipulating the displayed data
 * (including sorting, pagination, and filtering).
 */
export class EditReferendumTableDataSource extends DataSource<Referendum_Questions> {
  // data: Referendum_Questions[];

  data: BehaviorSubject<Referendum_Questions[]> = new BehaviorSubject([]);
  identifiersOfRemovedQuestions: number[] = [];
  constructor() {
    super();
  }

  /**
   * Connect this data source to the table. The table will only update when
   * the returned stream emits new items.
   * @returns A stream of the items to be rendered.
   */
  connect(): Observable<Referendum_Questions[]> {
    return this.data.asObservable();
  }

  /**
   *  Called when the table is being destroyed. Use this function, to clean up
   * any open connections or free any held resources that were set up during connect.
   */
  disconnect(): void {}
}
