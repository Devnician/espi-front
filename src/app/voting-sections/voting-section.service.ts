import { Injectable } from '@angular/core';
import { FetchResult } from '@apollo/client';
import { QueryRef } from 'apollo-angular';
import * as moment from 'moment';
import { Observable } from 'rxjs';
import {
  CloseVotingSectionGQL,
  CloseVotingSectionMutation,
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
    private closeVotingSectionGQL: CloseVotingSectionGQL
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
    console.log(when);
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
    console.log(when);
    return this.closeVotingSectionGQL.mutate({ sectionId, when });
  }
}
