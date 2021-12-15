import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LoaderService {
  protected loading: BehaviorSubject<any> = new BehaviorSubject(false);
  loading$ = this.loading.asObservable();
  constructor() {
    //
  }

  public startLoader(): void {
    this.loading.next(true);
  }

  /**
   * stopLoading
   */
  public stopLoader(): void {
    this.loading.next(false);
  }
}
