import { Injectable } from '@angular/core';
import { QueryRef } from 'apollo-angular';
import {
  GetVotingSectionsGQL,
  GetVotingSectionsQuery,
  Voting_Section_Bool_Exp,
  Voting_Section_Order_By,
} from 'src/generated/graphql';

@Injectable({
  providedIn: 'root',
})
export class VotingSectionsService {
  constructor(private getVotingSectionsGQL: GetVotingSectionsGQL) {
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
        pollInterval: 5 * 1000,
      }
    );
  }
}
