import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth-service';
//import { Token } from '../auth/token.interface';

@Injectable({
  providedIn: 'root',
})
export class BaseGuard implements CanActivate {
  constructor(private auth: AuthService, private router: Router) {}

  canActivate(
    childRoute: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    // console.log(childRoute, childRoute.data);
    console.log('Can I ..');
    if (true /*'all is correct'*/) {
      //return this.router.createUrlTree(['/']);
      return true;
    } else {
      return this.router.createUrlTree(['/auth', 'login']);
    }

    // return this.auth.token$.pipe(
    //   switchMap(() => this.auth.getToken()),
    //   map((token: Token) => {
    //     console.log(token);
    //     if (token) {
    //       return true;
    //     }
    //     return this.router.createUrlTree(['/auth', 'login']);
    //   })
    // );
  }
}
