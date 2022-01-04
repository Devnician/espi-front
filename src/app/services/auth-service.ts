import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ApolloQueryResult, FetchResult } from '@apollo/client';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import {
  LoginActionGQL,
  LoginActionQuery,
  LoginInput,
  RegisterGQL,
  RegisterQuery,
  RegisterUserInsertInput,
} from 'src/generated/graphql';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  static readonly ACC_TOKEN = 'access_token';
  static readonly FETCH_TOKEN = 'fetch-token';

  private token: BehaviorSubject<string> = new BehaviorSubject(null);
  public readonly token$ = this.token.asObservable();

  host: string = environment.expressUrl;

  constructor(
    private http: HttpClient,
    private registerGQL: RegisterGQL,
    private loginActionGQL: LoginActionGQL /*private actionCallGQL: ActionCallGQL*/
  ) {
    if (environment.production === false) {
      const token = localStorage.getItem('token');
      console.log(token);
      this.token.next(token);
    }
  }

  actionRegister(
    data: RegisterUserInsertInput
  ): Observable<
    FetchResult<RegisterQuery, Record<string, any>, Record<string, any>>
  > {
    return this.registerGQL.fetch(
      { args: data },
      { fetchPolicy: 'network-only' }
    );
  }

  loginAction(
    data: LoginInput
  ): Observable<ApolloQueryResult<LoginActionQuery>> {
    return this.loginActionGQL.fetch(
      { args: data },
      { fetchPolicy: 'network-only' }
    );
  }

  // This method calls  directly Express
  callExpressLogin(): Observable<any> {
    return this.http.get<any>(this.host + 'login/');
  }

  callExpressThroughHasuraActions(username: string, password: string) {
    // return this.actionCallGQL.mutate({ arg: { username, password } });
  }

  setToken(token: string) {
    this.token.next(token);
  }
}
