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
export class LoginGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean | UrlTree> {
    // return of(true);
    return this.authService.accessToken$.pipe(
      map((token) => {
        // console.log('LOGIN GUARD');
        // console.log(token);
        // console.log(state.url);

        if (token && state.url.indexOf('auth/login') > -1) {
          // console.log('Create url tree from login Guard...');
          return this.router.createUrlTree(['/']);
        }
        return true;
      })
    );
  }
}
