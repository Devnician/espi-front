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
import { LoggedUser } from '../auth/logged-user.interface';
import { TokenTypes } from '../auth/token-types.enum';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private accessToken: BehaviorSubject<string> = new BehaviorSubject(null);
  public readonly accessToken$ = this.accessToken.asObservable();

  private fetchToken: BehaviorSubject<string> = new BehaviorSubject(null);
  public readonly fetchToken$ = this.fetchToken.asObservable();

  private user: BehaviorSubject<LoggedUser> = new BehaviorSubject(null);
  public readonly user$ = this.user.asObservable();

  // host: string = environment.expressUrl;

  constructor(
    private http: HttpClient,
    private registerGQL: RegisterGQL,
    private loginActionGQL: LoginActionGQL /*private actionCallGQL: ActionCallGQL*/
  ) {
    if (environment.production === false) {
      const accessT = localStorage.getItem(TokenTypes.ACCESS_TOKEN);
      const fetchT = localStorage.getItem(TokenTypes.FETCH_TOKEN);
      console.log('tokens from local..');
      this.accessToken.next(accessT);
    }
  }

  actionRegister(
    data: RegisterUserInsertInput
  ): Observable<
    FetchResult<RegisterQuery, Record<string, any>, Record<string, any>>
  > {
    return this.registerGQL.fetch(
      { args: data },
      { fetchPolicy: 'network-only', errorPolicy: 'all' }
    );
  }

  loginAction(
    data: LoginInput
  ): Observable<ApolloQueryResult<LoginActionQuery>> {
    return this.loginActionGQL.fetch(
      { args: data },
      { fetchPolicy: 'network-only', errorPolicy: 'all' }
    );
  }

  // This method calls  directly Express
  // callExpressLogin(): Observable<any> {
  //   return this.http.get<any>(this.host + 'login/');
  // }

  setAccessToken(token: string) {
    this.accessToken.next(token);
  }

  setFetchToken(token: string) {
    this.fetchToken.next(token);
  }

  setLoggedUser(user: LoggedUser) {
    this.user.next(user);
  }
  /**
   * Nullifies subjects
   */
  clearAll() {
    this.setAccessToken(null);
    this.setFetchToken(null);
    this.setLoggedUser(null);
  }

  saveTokensInLocalStorage(accToken: string, fetchToken: string) {
    localStorage.setItem(TokenTypes.ACCESS_TOKEN, accToken);
    localStorage.setItem(TokenTypes.FETCH_TOKEN, fetchToken);
  }

  TokensFromLocalStorage() {
    localStorage.removeItem(TokenTypes.ACCESS_TOKEN);
    localStorage.removeItem(TokenTypes.FETCH_TOKEN);
  }
}
