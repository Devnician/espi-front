import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { ApolloQueryResult, FetchResult } from '@apollo/client';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import {
  LoginActionGQL,
  LoginActionQuery,
  LoginInput,
  RefreshGQL,
  RefreshQuery,
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
  private userRoleIndex: BehaviorSubject<number> = new BehaviorSubject(0);
  public readonly userRoleIndex$ = this.userRoleIndex.asObservable();

  // host: string = environment.expressUrl;

  constructor(
    private http: HttpClient,
    private registerGQL: RegisterGQL,
    private loginActionGQL: LoginActionGQL,
    private refreshGQL: RefreshGQL
  ) {
    if (environment.production === false) {
      const accessT = localStorage.getItem(TokenTypes.ACCESS_TOKEN);
      const fetchT = localStorage.getItem(TokenTypes.FETCH_TOKEN);
      console.log('tokens from local storage..');
      this.accessToken.next(accessT);
    }
  }

  // Calls

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

  refreshToken(
    // userId: number,
    roleIndex: number
  ): Observable<ApolloQueryResult<RefreshQuery>> {
    console.log('REFRESH WORKS');
    const userId = this.user.value.id;
    return this.refreshGQL.fetch(
      { args: { userId, roleIndex } },
      { fetchPolicy: 'network-only', errorPolicy: 'all' }
    );
  }

  setFetchTokenAndOptionalRedirectToHome(
    fetchToken: string,
    router: Router,
    goHome: boolean
  ) {
    this.setFetchToken(fetchToken);
    if (environment.production === false) {
      localStorage.setItem(TokenTypes.FETCH_TOKEN, fetchToken);
    }
    if (goHome) {
      router.navigateByUrl('/');
    }
  }

  setAccessToken(token: string) {
    this.accessToken.next(token);
  }

  setFetchToken(token: string) {
    this.fetchToken.next(token);
  }

  setLoggedUser(user: LoggedUser) {
    this.user.next(user);
  }
  setCurrentRoleIndex(index: number) {
    this.userRoleIndex.next(index);
  }
  /**
   * Nullifies subjects
   */
  clearAll() {
    this.setAccessToken(null);
    this.setFetchToken(null);
    this.setLoggedUser(null);
  }

  clearTokensFromLocalStorage() {
    localStorage.removeItem(TokenTypes.ACCESS_TOKEN);
    localStorage.removeItem(TokenTypes.FETCH_TOKEN);
  }
}
