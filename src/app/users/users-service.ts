import { Injectable } from '@angular/core';
import { FetchResult } from '@apollo/client';
import { QueryRef } from 'apollo-angular';
import { Observable } from 'rxjs';
import {
  CreateUserGQL,
  CreateUserMutation,
  GetUsersGQL,
  GetUsersQuery,
  UpdateUserGQL,
  Users_Bool_Exp,
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
    private getUsersGQL: GetUsersGQL
  ) {}
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
        pollInterval: 5 * 1000,
      }
    );
  }

  createUser(
    input: Users_Set_Input
  ): Observable<
    FetchResult<CreateUserMutation, Record<string, any>, Record<string, any>>
  > {
    return this.createUserGQL.mutate(
      { input }
      // {
      //   update: (cache, { data }) => {
      //     const existingOrders: any = cache.readQuery({
      //       query: GetOrdersDocument,
      //       variables: {
      //         limit: 1,
      //       },
      //     });
      //     console.log(existingOrders);
      //     const created = data.insert_orders_one;
      //     console.log(created);
      //     cache.writeQuery({
      //       query: GetOrdersDocument,
      //       data: {
      //         orders: [...existingOrders.orders, created],
      //         orders_aggregate: existingOrders.orders_aggregate,
      //       },
      //     });
      //   },
      // }
    );
  }
  updateUser(user: Users_Set_Input) {
    return this.updateUserGQL.mutate({ id: user.id, set: user });
  }
}
