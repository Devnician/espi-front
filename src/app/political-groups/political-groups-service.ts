import { Injectable } from '@angular/core';
import { FetchResult } from 'apollo-link';
import { Observable } from 'rxjs';
import {
  AddPoliticalMemberGQL,
  CreatePoliticalGroupGQL,
  CreatePoliticalGroupMutation,
  GetPoliticalGroupMembersGQL,
  GetPoliticalGroupsGQL,
  Political_Groups_Bool_Exp,
  Political_Groups_Order_By,
  Political_Groups_Set_Input,
  Political_Group_Members_Bool_Exp,
  Political_Group_Members_Insert_Input,
  Political_Group_Members_Order_By,
  RemoveMemberFromGroupGQL,
  UpdatePoliticalGroupGQL,
  UpdatePoliticalGroupMutation,
  UpdatePoliticalMemberVotingIdGQL,
} from 'src/generated/graphql';

@Injectable({
  providedIn: 'root',
})
export class PoliticalGroupsService {
  constructor(
    private getGroups: GetPoliticalGroupsGQL,

    private createPoliticalGroupGQL: CreatePoliticalGroupGQL,
    private updatePoliticalGroupGQL: UpdatePoliticalGroupGQL,
    private getMembers: GetPoliticalGroupMembersGQL,
    private removeMemberFromGroupGQL: RemoveMemberFromGroupGQL,
    private addPoliticalMemberGQL: AddPoliticalMemberGQL,
    private updatePoliticalMemberVotingIdGQL: UpdatePoliticalMemberVotingIdGQL
  ) {
    // *
  }

  getPoliticalGroups(
    limit = 10,
    offset = 0,
    condition: Political_Groups_Bool_Exp = {},
    orderBy: Political_Groups_Order_By
  ) {
    return this.getGroups.watch(
      { limit, offset, condition, orderBy },
      {
        fetchPolicy: 'network-only',
        partialRefetch: true,
        errorPolicy: 'all',
        pollInterval: 60 * 1000,
      }
    );
  }
  removeMemberFromGroup(memberId: number) {
    return this.removeMemberFromGroupGQL.mutate(
      { memberId },
      { errorPolicy: 'all' }
    );
  }

  addPoliticalMember(insertInput: Political_Group_Members_Insert_Input) {
    return this.addPoliticalMemberGQL.mutate(
      { object: insertInput },
      { errorPolicy: 'all' }
    );
  }
  updateStateOfPoliticalMember(id: number, votingId: number) {
    return this.updatePoliticalMemberVotingIdGQL.mutate({ id, votingId });
  }

  getPoliticalGroupMembers(
    limit = 10,
    offset = 0,
    condition: Political_Group_Members_Bool_Exp = {},
    orderBy: Political_Group_Members_Order_By
  ) {
    return this.getMembers.watch(
      { limit, offset, condition, orderBy },
      {
        fetchPolicy: 'network-only',
        partialRefetch: true,
        errorPolicy: 'all',
        pollInterval: 60 * 1000,
      }
    );
  }

  createPoliticalGroup(
    object: any
  ): Observable<
    FetchResult<
      CreatePoliticalGroupMutation,
      Record<string, any>,
      Record<string, any>
    >
  > {
    return this.createPoliticalGroupGQL.mutate(
      { object },
      { errorPolicy: 'all' }
    );
  }

  updatePoliticalGroup(
    id: number,
    set: Political_Groups_Set_Input
  ): Observable<
    FetchResult<
      UpdatePoliticalGroupMutation,
      Record<string, any>,
      Record<string, any>
    >
  > {
    return this.updatePoliticalGroupGQL.mutate(
      { id, set },
      { errorPolicy: 'all' }
    );
  }
}
