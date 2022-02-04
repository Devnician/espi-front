import { Injectable } from '@angular/core';
import { ApolloQueryResult, FetchResult } from '@apollo/client';
import { Observable } from 'rxjs';
import {
  AddVoteForTheReferendumGQL,
  AddVoteForTheReferendumMutation,
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
  Referendum_Votes_Insert_Input,
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
    private getStartedVotingsGQL: GetStartedVotingsGQL,
    private addVoteForTheReferendumGQL: AddVoteForTheReferendumGQL
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

  DELETE_THIS_METHOD_getReferendums() {
    return this.getReferendumsGQL.fetch(
      {},
      {
        fetchPolicy: 'network-only',
        errorPolicy: 'all',
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

  //#region VOTES
  addVoteForReferendum(
    answers: Referendum_Votes_Insert_Input[]
  ): Observable<
    FetchResult<
      AddVoteForTheReferendumMutation,
      Record<string, any>,
      Record<string, any>
    >
  > {
    console.log(answers);
    return this.addVoteForTheReferendumGQL.mutate(
      { votes: answers },
      { errorPolicy: 'all' }
    );
  }
}
