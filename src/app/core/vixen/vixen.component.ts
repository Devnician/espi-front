import { Component, Injector, OnDestroy } from '@angular/core';
import { isNullOrUndefined } from 'is-what';
import { BehaviorSubject, Observable, Subscription } from 'rxjs';
import { LoggedUser } from 'src/app/auth/logged-user.interface';
import { AuthService } from 'src/app/services/auth-service';
import { Valido } from '../valido';

@Component({
  selector: 'app-vixen',
  template: 'empty',
})
export class VixenComponent implements OnDestroy {
  /**
   * Array for all Subscription objects. For each object in OnDestroy method will be invoked `unsubscribe` method.
   */
  protected subscriptions: Subscription[] = [];
  public valido: Valido;
  protected authService: AuthService;
  private user: BehaviorSubject<LoggedUser> = new BehaviorSubject(null);
  public readonly user$: Observable<LoggedUser> = this.user.asObservable();
  private currentRoleIndex: BehaviorSubject<number> = new BehaviorSubject(-1);
  protected readonly currentRoleIndex$: Observable<number> =
    this.currentRoleIndex.asObservable();

  constructor(protected injector: Injector) {
    this.valido = this.injector.get(Valido);
    this.authService = this.injector.get(AuthService);
    this.subscriptions.push(
      this.authService.user$.subscribe((data) => {
        console.log(data);
        this.user.next(data);
      }),
      this.authService.userRoleIndex$.subscribe((data) => {
        console.log(data);
        this.currentRoleIndex.next(data);
      })
    );
  }

  ngOnDestroy(): void {
    Object.entries(this).forEach((field) => {
      if (
        !field[0].includes('load') &&
        (field[1] instanceof BehaviorSubject ||
          field[1] instanceof Subscription)
      ) {
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
