import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FetchResult } from '@apollo/client';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import {
  RegisterGQL,
  RegisterMutation,
  RegisterUserInsertInput,
} from 'src/generated/graphql';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private token: BehaviorSubject<string> = new BehaviorSubject(null);
  public readonly token$ = this.token.asObservable();
  host: string = environment.expressUrl;

  constructor(
    private http: HttpClient,
    private registerGQL: RegisterGQL /*private actionCallGQL: ActionCallGQL*/
  ) {}

  registerUserAndGetAccessToken(
    data: RegisterUserInsertInput
  ): Observable<
    FetchResult<RegisterMutation, Record<string, any>, Record<string, any>>
  > {
    return this.registerGQL.mutate({ args: data });
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
