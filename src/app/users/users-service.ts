import { Injectable } from '@angular/core';
import { FetchResult } from '@apollo/client';
import { QueryRef } from 'apollo-angular';
import { Observable } from 'rxjs';
import {
  Addresses_Set_Input,
  BulkInsertUsersGQL,
  BulkInsertUsersMutation,
  CreateUserGQL,
  CreateUserMutation,
  GetUsersGQL,
  GetUsersQuery,
  // LoginGQL,
  // LoginQuery,
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
    private getUsersGQL: GetUsersGQL, // private loginGQL: LoginGQL
    private bulkInsertUsersGQL: BulkInsertUsersGQL
  ) {}

  createUser(
    input: Users_Set_Input
  ): Observable<
    FetchResult<CreateUserMutation, Record<string, any>, Record<string, any>>
  > {
    return this.createUserGQL.mutate(
      { input },
      { errorPolicy: 'all' }
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
    console.log(users.length);
    return this.bulkInsertUsersGQL.mutate({ objects: users });
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
