import { Component, Injector, OnDestroy } from '@angular/core';
import { isNullOrUndefined } from 'is-what';
import { BehaviorSubject, Observable, Subscription } from 'rxjs';
import { LoggedUser } from 'src/app/auth/logged-user.interface';
import { AuthService } from 'src/app/services/auth-service';
import { Role_Types_Enum, Users } from 'src/generated/graphql';
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
  public readonly userObservables: Observable<any>[] = [
    this.user$,
    this.currentRoleIndex$,
  ];

  constructor(protected injector: Injector) {
    this.valido = this.injector.get(Valido);
    this.authService = this.injector.get(AuthService);
    this.subscriptions.push(
      this.authService.user$.subscribe((data) => {
        // console.log(data);
        this.user.next(data);
      }),
      this.authService.userRoleIndex$.subscribe((data) => {
        // console.log(data);
        this.currentRoleIndex.next(data);
      })
    );
  }

  getUSerRole(user: Users, index: number): Role_Types_Enum {
    if (index === 0) {
      return user.roleType.value as Role_Types_Enum;
    } else if (index === 1) {
      return user?.secondRoleType.value as Role_Types_Enum;
    }
    return null;
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
