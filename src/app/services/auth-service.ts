import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ActionCallGQL } from 'src/generated/graphql';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  host: string = environment.expressUrl;
  constructor(private http: HttpClient, private actionCallGQL: ActionCallGQL) {}

  // This method calls  directly Express
  callExpressLogin(): Observable<any> {
    return this.http.get<any>(this.host + 'login/');
  }

  callExpressThroughHasuraActions(username: string, password: string) {
    return this.actionCallGQL.mutate({ arg: { username, password } });
  }
}
