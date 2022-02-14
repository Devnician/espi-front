import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { GetFinishedReferendumsGQL, GetFinishedReferendumsQuery, GetReferendumCountingsGQL, GetReferendumCountingsQuery, Referendums_Bool_Exp, Referendum_Countings_Bool_Exp } from 'src/generated/graphql';
import { ApolloQueryResult, FetchResult } from '@apollo/client';


@Injectable({
  providedIn: 'root'
})
export class CountingService {

  constructor(
    private getFinishedReferendumsGQL: GetFinishedReferendumsGQL,
    private getReferendumCountingsGQL: GetReferendumCountingsGQL
  ) { }

  getFinishedReferendums(): Observable<
    ApolloQueryResult<GetFinishedReferendumsQuery>
  > {
    const where: Referendums_Bool_Exp = {
      _and: [
        { locked: { _eq: true } },
        { startedAt: { _is_null: false } },
        { finishedAt: { _is_null: true } },
      ],
    };

    return this.getFinishedReferendumsGQL.fetch(
      { where },
      { fetchPolicy: 'network-only' }
    );
  }

  getReferendumCountings(where?: Referendum_Countings_Bool_Exp): Observable<
    ApolloQueryResult<GetReferendumCountingsQuery>
  > {
    return this.getReferendumCountingsGQL.fetch({ where }, { fetchPolicy: 'network-only' })
  }
}
