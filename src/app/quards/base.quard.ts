import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { isNullOrUndefined } from 'is-what';
import { combineLatest, map, Observable } from 'rxjs';
import { Role_Types_Enum } from 'src/generated/graphql';
import { LoggedUser } from '../auth/logged-user.interface';
import { NavigationComponent } from '../navigation/navigation.component';
import { AuthService } from '../services/auth-service';

@Injectable({
  providedIn: 'root',
})
export class BaseGuard implements CanActivate {
  private obs: Observable<LoggedUser | number>[] = [];
  private currentRole: Role_Types_Enum;
  constructor(
    private authService: AuthService,
    private router: Router,
    private snackBar: MatSnackBar
  ) {
    this.obs.push(this.authService.user$);
    this.obs.push(this.authService.userRoleIndex$);
    combineLatest(this.obs).subscribe((observableResults) => {
      //  console.log(observableResults);
      const user: LoggedUser = observableResults[0] as LoggedUser;
      const index = observableResults[1];

      if (isNullOrUndefined(user) === false && (index === 0 || index === 1)) {
        //  console.log(index);
        if (index === 0) {
          this.currentRole = user.roleType.value as Role_Types_Enum;
        } else if (index === 1) {
          this.currentRole = user.secondRoleType.value as Role_Types_Enum;
        }
      }
    });
  }

  canActivate(
    childRoute: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    return this.authService.user$.pipe(
      map((user) => {
        if (user && state.url.indexOf('auth/login') > -1) {
          console.log('Create url tree from login Guard...');
          return this.router.createUrlTree(['/']);
        }
        // console.log(
        //   'BASE GUARD: role: ' + this.currentRole + ', url: ' + state.url
        // );
        const segments: string[] = state.url.replace(/^\/+/, '').split('/');

        if (this.check(segments.pop())) {
          return true;
        } else {
          this.snackBar.open(
            'Нямате необходимите права за да посетите този адрес.',
            'OK',
            {}
          );
          return this.router.createUrlTree(['/']);
        }
      })
    );
  }

  private check(path: string): boolean {
    if (this.currentRole) {
      try {
        const segments = NavigationComponent.roleToSegments.get(
          this.currentRole
        );
        return segments.findIndex((s) => s === path) > -1;
      } catch (error) {
        return false;
      }
    }
    return false;
  }
}
