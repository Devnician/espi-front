import { Injectable } from '@angular/core';
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
import { AuthService } from '../services/auth-service';

@Injectable({
  providedIn: 'root',
})
export class BaseGuard implements CanActivate {
  private obs: Observable<LoggedUser | number>[] = [];
  private currentRole: Role_Types_Enum;
  constructor(private authService: AuthService, private router: Router) {
    this.obs.push(this.authService.user$);
    this.obs.push(this.authService.userRoleIndex$);
    combineLatest(this.obs).subscribe((observableResults) => {
      console.log('--------');
      console.log(observableResults);
      const user: LoggedUser = observableResults[0] as LoggedUser;
      const index = observableResults[1];

      if (isNullOrUndefined(user) === false && (index === 0 || index === 1)) {
        if (index === 0) {
          this.currentRole = user.roleType.value as Role_Types_Enum;
        } else if (index === 1) {
          this.currentRole = user.secondRoleType.value as Role_Types_Enum;
        }
        // this. currentRole = (
        //   index === 0 ? user.roleType.value : user.secondRoleType.value
        // ) as Role_Types_Enum;
        // currentRole
        console.log(this.currentRole);
      } else {
        console.log('...................');
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
        // console.log(user);
        // TODO -  add path checks for user
        // console.log(state.url);
        if (user && state.url.indexOf('auth/login') > -1) {
          console.log('Create url tree from login Guard...');
          return this.router.createUrlTree(['/']);
        }
        console.log('BASE GUARD: ');
        console.log(
          'Can the user visit this..',
          this.currentRole,
          childRoute.url,
          state.url
        );
        if (this.check(state.url)) {
          return true;
        } else {
          // TODO ADD TOAST....
          return this.router.createUrlTree(['/']);
        }
        return false;
        // return this.check(state.url);
      })
    );
  }

  private check(path: string): boolean {
    if (this.currentRole) {
      switch (this.currentRole) {
        case Role_Types_Enum.CentralLeader:
          if (path.indexOf('votings/dashboard') > -1) {
            console.log('BOOOOM');
            return false;
          } else {
            return true;
          }
          break;
        default:
          return false;
      }
    }
    return false;
    // return false;
  }
}
