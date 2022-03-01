import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { map, Observable } from 'rxjs';
import { AuthService } from '../services/auth-service';

@Injectable({
  providedIn: 'root',
})
export class BaseGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {}

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
        console.log(user);
        // TODO -  add path checks for user
        // console.log(state.url);
        if (user && state.url.indexOf('auth/login') > -1) {
          console.log('Create url tree from login Guard...');
          return this.router.createUrlTree(['/']);
        }
        console.log('BASE GUARD: ');
        console.log('Can the user visit this..', user, childRoute);
        return true;
      })
    );
  }
}
