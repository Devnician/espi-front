import { Injectable } from '@angular/core';
import { ApolloQueryResult } from '@apollo/client';
import { Observable } from 'rxjs';
import {
  GetStartedVotingsGQL,
  GetStartedVotingsQuery,
} from 'src/generated/graphql';
@Injectable({
  providedIn: 'root', // VotingsModule,
})
export class VotingsService {
  constructor(private GetStartedVotingsGQL: GetStartedVotingsGQL) {}

  getStartedVotings(): Observable<ApolloQueryResult<GetStartedVotingsQuery>> {
    return this.GetStartedVotingsGQL.fetch();
  }
}
