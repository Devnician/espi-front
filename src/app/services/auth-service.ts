import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private token: BehaviorSubject<string> = new BehaviorSubject(null);
  public readonly token$ = this.token.asObservable();
  host: string = environment.expressUrl;
  constructor(
    private http: HttpClient /*private actionCallGQL: ActionCallGQL*/
  ) {}

  // This method calls  directly Express
  callExpressLogin(): Observable<any> {
    return this.http.get<any>(this.host + 'login/');
  }

  callExpressThroughHasuraActions(username: string, password: string) {
    // return this.actionCallGQL.mutate({ arg: { username, password } });
  }
}
