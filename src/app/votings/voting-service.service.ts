import { Injectable } from '@angular/core';
import { ApolloQueryResult, FetchResult } from '@apollo/client';
import { Observable } from 'rxjs';
import {
  AddVoteForTheReferendumGQL,
  AddVoteForTheReferendumMutation,
  CreateReferendumGQL,
  CreateReferendumMutation,
  CreateVotingGQL,
  CreateVotingMutation,
  GetReferendumsGQL,
  GetStartedReferendumsGQL,
  GetStartedReferendumsQuery,
  GetStartedVotingsGQL,
  GetStartedVotingsQuery,
  GetUpcomingVotingsGQL,
  GetUpcomingVotingsQuery,
  GetVotingsGQL,
  Referendums_Bool_Exp,
  Referendums_Insert_Input,
  Referendums_Order_By,
  Referendums_Set_Input,
  Referendum_Questions_Insert_Input,
  Referendum_Votes_Insert_Input,
  UpdateReferendumAndQuestionGQL,
  UpdateReferendumAndQuestionMutation,
  UpdateVotingGQL,
  UpdateVotingMutation,
  Votings_Bool_Exp,
  Votings_Insert_Input,
  Votings_Order_By,
  Votings_Set_Input,
} from 'src/generated/graphql';
@Injectable({
  providedIn: 'root', // VotingsModule,
})
export class VotingsService {
  constructor(
    private createReferendumGQL: CreateReferendumGQL,
    private updateReferendumAndQuestionGQL: UpdateReferendumAndQuestionGQL,
    private getReferendumsGQL: GetReferendumsGQL,
    private getStartedReferendumsGQL: GetStartedReferendumsGQL,
    private createVotingGQL: CreateVotingGQL,
    private updateVotingGQL: UpdateVotingGQL,
    private getVotingsGQL: GetVotingsGQL,
    private getUpcomingVotingsGQL: GetUpcomingVotingsGQL,
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

  createVoting(
    object: Votings_Insert_Input
  ): Observable<
    FetchResult<CreateVotingMutation, Record<string, any>, Record<string, any>>
  > {
    return this.createVotingGQL.mutate(
      { input: object },
      { errorPolicy: 'all' }
    );
  }

  updateVoting(
    id: number,
    set: Votings_Set_Input
  ): Observable<
    FetchResult<UpdateVotingMutation, Record<string, any>, Record<string, any>>
  > {
    return this.updateVotingGQL.mutate(
      { id, input: set },
      { errorPolicy: 'all' }
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
    const where: Votings_Bool_Exp = {
      _and: [
        { locked: { _eq: true } },
        { startedAt: { _is_null: false } },
        { finishedAt: { _is_null: true } },
      ],
    };
    return this.getStartedVotingsGQL.fetch(
      { where },
      { fetchPolicy: 'network-only' }
    );
  }

  public getUpcomingVotings(
    startDate: Date
  ): Observable<ApolloQueryResult<GetUpcomingVotingsQuery>> {
    return this.getUpcomingVotingsGQL.fetch({ startDate });
  }
  getStartedReferendums(): Observable<
    ApolloQueryResult<GetStartedReferendumsQuery>
  > {
    const where: Referendums_Bool_Exp = {
      _and: [
        { locked: { _eq: true } },
        { startedAt: { _is_null: false } },
        { finishedAt: { _is_null: true } },
      ],
    };

    return this.getStartedReferendumsGQL.fetch(
      { where },
      { fetchPolicy: 'network-only' }
    );
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
