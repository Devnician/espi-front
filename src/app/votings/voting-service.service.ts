import { Injectable } from '@angular/core';
import { ApolloQueryResult, FetchResult } from '@apollo/client';
import { Observable } from 'rxjs';
import {
  CreateReferendumGQL,
  CreateReferendumMutation,
  GetReferendumsGQL,
  GetStartedVotingsGQL,
  GetStartedVotingsQuery,
  GetVotingsGQL,
  Referendums_Bool_Exp,
  Referendums_Insert_Input,
  Referendums_Order_By,
  Referendums_Set_Input,
  Referendum_Questions_Insert_Input,
  UpdateReferendumAndQuestionGQL,
  UpdateReferendumAndQuestionMutation,
  Votings_Bool_Exp,
  Votings_Order_By,
} from 'src/generated/graphql';
@Injectable({
  providedIn: 'root', // VotingsModule,
})
export class VotingsService {
  constructor(
    private createReferendumGQL: CreateReferendumGQL,
    private updateReferendumAndQuestionGQL: UpdateReferendumAndQuestionGQL,
    private getReferendumsGQL: GetReferendumsGQL,
    private getVotingsGQL: GetVotingsGQL,
    private getStartedVotingsGQL: GetStartedVotingsGQL
  ) {}

  createReferendum(
    referendumInput: Referendums_Insert_Input
  ): Observable<
    FetchResult<
      CreateReferendumMutation,
      Record<string, any>,
      Record<string, any>
    >
  > {
    return this.createReferendumGQL.mutate(
      { referendum: referendumInput },
      { errorPolicy: 'all' }
    );
  }
  updateReferendum(
    referendumId: number,
    set: Referendums_Set_Input,
    questions: Referendum_Questions_Insert_Input[],
    removed: number[]
  ): Observable<
    FetchResult<
      UpdateReferendumAndQuestionMutation,
      Record<string, any>,
      Record<string, any>
    >
  > {
    return this.updateReferendumAndQuestionGQL.mutate(
      {
        referendumId,
        set,
        questions,
        removed,
      },
      { errorPolicy: 'all' }
    );
  }

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