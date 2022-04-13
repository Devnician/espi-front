import { Injectable } from '@angular/core';
import { ApolloQueryResult, FetchResult } from '@apollo/client';
import { QueryRef } from 'apollo-angular';
import * as moment from 'moment';
import { Observable } from 'rxjs';
import {
  CloseVotingSectionGQL,
  CloseVotingSectionMutation,
  GetCommissionOfVotingSectionGQL,
  GetCommissionOfVotingSectionQuery,
  GetVotingSectionsGQL,
  GetVotingSectionsQuery,
  OpenVotingSectionGQL,
  OpenVotingSectionMutation,
  Voting_Section_Bool_Exp,
  Voting_Section_Order_By,
} from 'src/generated/graphql';

@Injectable({
  providedIn: 'root',
})
export class VotingSectionsService {
  constructor(
    private getVotingSectionsGQL: GetVotingSectionsGQL,
    private openVotingSectionGQL: OpenVotingSectionGQL,
    private closeVotingSectionGQL: CloseVotingSectionGQL,
    private getCommissionOfVotingSectionGQL: GetCommissionOfVotingSectionGQL
  ) {
    //*
  }

  getVotingSections(
    limit = 10,
    offset = 0,
    condition: Voting_Section_Bool_Exp = {},
    orderBy: Voting_Section_Order_By
  ): QueryRef<GetVotingSectionsQuery> {
    return this.getVotingSectionsGQL.watch(
      { limit, offset, condition, orderBy },
      {
        fetchPolicy: 'network-only',
        partialRefetch: true,
        errorPolicy: 'all',
        pollInterval: 30 * 1000,
      }
    );
  }

  openVotingSection(
    sectionId: number
  ): Observable<
    FetchResult<
      OpenVotingSectionMutation,
      Record<string, any>,
      Record<string, any>
    >
  > {
    const when = moment().toDate();
    return this.openVotingSectionGQL.mutate({ sectionId, when });
  }
  closeVotingSection(
    sectionId: number
  ): Observable<
    FetchResult<
      CloseVotingSectionMutation,
      Record<string, any>,
      Record<string, any>
    >
  > {
    const when = moment().toDate();
    return this.closeVotingSectionGQL.mutate({ sectionId, when });
  }

  getCommissionOfVotingSection(
    sectionId: number
  ): Observable<ApolloQueryResult<GetCommissionOfVotingSectionQuery>> {
    return this.getCommissionOfVotingSectionGQL.fetch(
      { sectionId },
      { fetchPolicy: 'network-only' }
    );
  }
}
