import { Injectable } from '@angular/core';
import { ApolloQueryResult } from '@apollo/client';
import { Observable } from 'rxjs';
import {
  GetReferendumsGQL,
  GetStartedVotingsGQL,
  GetStartedVotingsQuery,
  GetVotingsGQL,
  Referendums_Bool_Exp,
  Referendums_Order_By,
  Votings_Bool_Exp,
  Votings_Order_By,
} from 'src/generated/graphql';
@Injectable({
  providedIn: 'root', // VotingsModule,
})
export class VotingsService {
  constructor(
    private getReferendumsGQL: GetReferendumsGQL,
    private getVotingsGQL: GetVotingsGQL,
    private getStartedVotingsGQL: GetStartedVotingsGQL
  ) {}

  getReferendums(
    limit = 10,
    offset = 0,
    condition: Referendums_Bool_Exp = {},
    orderBy: Referendums_Order_By
  ) {
    return this.getReferendumsGQL.watch(
      { limit, offset, condition, orderBy },
      {
        fetchPolicy: 'network-only',
        partialRefetch: true,
        errorPolicy: 'all',
        pollInterval: 5 * 1000,
      }
    );
  }

  getVotings(
    limit = 10,
    offset = 0,
    condition: Votings_Bool_Exp = {},
    orderBy: Votings_Order_By
  ) {
    return this.getVotingsGQL.watch(
      { limit, offset, condition, orderBy },
      {
        fetchPolicy: 'network-only',
        partialRefetch: true,
        errorPolicy: 'all',
        pollInterval: 5 * 1000,
      }
    );
  }

  getStartedVotings(): Observable<ApolloQueryResult<GetStartedVotingsQuery>> {
    return this.getStartedVotingsGQL.fetch();
  }
}
