import { Injectable } from '@angular/core';
import { FetchResult } from 'apollo-link';
import { Observable } from 'rxjs';
import {
  CreatePoliticalGroupGQL,
  CreatePoliticalGroupMutation,
  GetPoliticalGroupMembersGQL,
  GetPoliticalGroupsGQL,
  Political_Groups_Bool_Exp,
  Political_Groups_Order_By,
  Political_Groups_Set_Input,
  Political_Group_Members_Bool_Exp,
  Political_Group_Members_Order_By,
  UpdatePoliticalGroupGQL,
  UpdatePoliticalGroupMutation,
} from 'src/generated/graphql';

@Injectable({
  providedIn: 'root',
})
export class PoliticalGroupsService {
  constructor(
    private getGroups: GetPoliticalGroupsGQL,

    private createPoliticalGroupGQL: CreatePoliticalGroupGQL,
    private updatePoliticalGroupGQL: UpdatePoliticalGroupGQL,
    private getMembers: GetPoliticalGroupMembersGQL
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
