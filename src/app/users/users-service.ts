import { Injectable } from '@angular/core';
import { ApolloQueryResult, FetchResult } from '@apollo/client';
import { QueryRef } from 'apollo-angular';
import { Observable } from 'rxjs';
import {
  Addresses_Set_Input,
  AutocompleteUsersGQL,
  AutocompleteUsersQuery,
  BulkInsertUsersGQL,
  BulkInsertUsersMutation,
  Commissions_Insert_Input,
  CountUndistributedToVotingSectionsGQL,
  CreateSectionCommissionGQL,
  CreateSectionCommissionMutation,
  CreateUserGQL,
  CreateUserMutation,
  DistributeUsersGQL,
  FetchUserWitnConditionGQL,
  GetUserByIdGQL,
  GetUserByIdQuery,
  GetUsersGQL,
  GetUsersQuery,
  MarkReferendumEvoteAsVoteGQL,
  Referendum_Votes_Insert_Input,
  UpdateUserGQL,
  Users_Bool_Exp,
  Users_Insert_Input,
  Users_Order_By,
  Users_Set_Input,
} from 'src/generated/graphql';
@Injectable({
  providedIn: 'root',
})
export class UsersService {
  constructor(
    private createUserGQL: CreateUserGQL,
    private updateUserGQL: UpdateUserGQL,
    private getUsersGQL: GetUsersGQL,
    private autocompleteUsersGQL: AutocompleteUsersGQL,
    private bulkInsertUsersGQL: BulkInsertUsersGQL,
    private countUndistributedToVotingSectionsGQL: CountUndistributedToVotingSectionsGQL,
    private distributeUsersGQL: DistributeUsersGQL,
    private getUserByIdGQL: GetUserByIdGQL,
    private markReferendumEvoteAsVoteGQL: MarkReferendumEvoteAsVoteGQL,
    private fetchUserWitnConditionGQL: FetchUserWitnConditionGQL,
    private createSectionCommissionGQL: CreateSectionCommissionGQL
  ) {}

  createUser(
    input: Users_Set_Input
  ): Observable<
    FetchResult<CreateUserMutation, Record<string, any>, Record<string, any>>
  > {
    return this.createUserGQL.mutate({ input }, { errorPolicy: 'all' });
  }
  getUsers(
    limit = 10,
    offset = 0,
    condition: Users_Bool_Exp = {},
    orderBy: Users_Order_By
  ): QueryRef<GetUsersQuery> {
    return this.getUsersGQL.watch(
      { limit, offset, condition, orderBy },
      {
        fetchPolicy: 'network-only',
        partialRefetch: true,
        errorPolicy: 'all',
        pollInterval: 30 * 1000,
      }
    );
  }
  autocompleteUsers(
    condition: Users_Bool_Exp = {},
    orderBy: Users_Order_By
  ): Observable<ApolloQueryResult<AutocompleteUsersQuery>> {
    return this.autocompleteUsersGQL.fetch(
      { condition, orderBy },
      { fetchPolicy: 'network-only', errorPolicy: 'all' }
    );
  }
  fetchUsersWithCondition(
    condition: Users_Bool_Exp = {},
    limit: number
  ): Observable<ApolloQueryResult<AutocompleteUsersQuery>> {
    return this.fetchUserWitnConditionGQL.fetch(
      { condition, limit },
      { fetchPolicy: 'network-only', errorPolicy: 'all' }
    );
  }

  getUserById(id: number): Observable<ApolloQueryResult<GetUserByIdQuery>> {
    return this.getUserByIdGQL.fetch({ id }, { fetchPolicy: 'network-only' });
  }

  updateUser(addressSet: Addresses_Set_Input, userSet: Users_Set_Input) {
    return this.updateUserGQL.mutate({
      addrId: addressSet.id,
      addressSet,
      userId: userSet.id,
      userSet,
    });
  }

  bulkInsertUsers(
    users: Users_Insert_Input[]
  ): Observable<
    FetchResult<
      BulkInsertUsersMutation,
      Record<string, any>,
      Record<string, any>
    >
  > {
    return this.bulkInsertUsersGQL.mutate({ objects: users });
  }
  countUndistributedToVotingSections() {
    return this.countUndistributedToVotingSectionsGQL.fetch(
      {},
      { fetchPolicy: 'network-only' }
    );
  }

  distributeUsers(max: number) {
    return this.distributeUsersGQL.mutate({ arg: { lim: max } });
  }

  markReferendumEvoteAsVote(referendumVotes: Referendum_Votes_Insert_Input[]) {
    return this.markReferendumEvoteAsVoteGQL.mutate({
      objects: referendumVotes,
    });
  }

  createSectionCommission(
    set: Users_Insert_Input[],
    commission: Commissions_Insert_Input
  ): Observable<
    FetchResult<
      CreateSectionCommissionMutation,
      Record<string, any>,
      Record<string, any>
    >
  > {
    return this.createSectionCommissionGQL.mutate({ set, commission });
  }

  //SELECT (password = crypt('pepe', password)) AS pswmatch FROM users WHERE id = 2 ;
  /**
   * Calls express throught action
  
   * @returns
   */
  // login(
  //   egn: string,
  //   pin: string,
  //   password: string
  // ): Observable<ApolloQueryResult<LoginQuery>> {
  //   console.log('Oppaa', egn, pin, password);
  //   return this.loginGQL.fetch({
  //     egn,
  //     pin,
  //     password,
  //   });
  // }
}
