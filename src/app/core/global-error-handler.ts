import { ErrorHandler, Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';

@Injectable()
export class GlobalErrorHandler implements ErrorHandler {
  constructor(
    // private errorsService: ErrorsService,
    // private auth: AuthService,
    private router: Router
  ) {}

  /**
   * Shows error in console and send it to backend.
   * @param error The error
   */
  handleError(error: Error): void {
    const message = error.message;
    const stack = error.stack;
    const url = this.router?.url;

    if (environment.production === false) {
      throw error;
    } else {
      try {
        alert('ERROR..');
        console.log(message, stack, url);
        // this.auth.getLoggedUserFromToken().subscribe((user) => {
        //   this.errorsService
        //     .createErrorLog({
        //       message,
        //       stack,
        //       userId: user?.id,
        //       companyId: user?.companyId,
        //       userRole: user?.role,
        //       url,
        //     })
        //     .subscribe();
        // });
      } catch (error) {
        // this.errorsService
        //   .createErrorLog({
        //     message,
        //     stack,
        //     url,
        //   })
        //   .subscribe();
      }
    }
  }
}
