import { Component, OnDestroy, OnInit } from '@angular/core';
import { isNullOrUndefined } from 'is-what';
import { BehaviorSubject, Subscription } from 'rxjs';
import { Valido } from '../valido';

@Component({
  selector: 'app-vixen',
  template: 'empty',
})
export class VixenComponent implements OnInit, OnDestroy {
  /**
   * Array for all Subscription objects. For each object in OnDestroy method will be invoked `unsubscribe` method.
   */
  protected subscriptions: Subscription[] = [];

  constructor(public valido: Valido) {}

  ngOnInit(): void {}

  ngOnDestroy(): void {
    Object.entries(this).forEach((field) => {
      if (
        !field[0].includes('load') &&
        (field[1] instanceof BehaviorSubject ||
          field[1] instanceof Subscription)
      ) {
        // console.log('Unsubscribe : ' + field[0]);
        field[1].unsubscribe();
      }
    });

    this.subscriptions.forEach((subscription) => {
      if (!isNullOrUndefined(subscription)) {
        subscription.unsubscribe();
      }
    });
    // console.log('detached: ' + this.subscriptions.length);
    delete this.subscriptions;
  }
}
