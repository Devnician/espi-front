import { Injectable } from '@angular/core';
import { QueryRef } from 'apollo-angular';
import { FetchResult } from 'apollo-link';
import { Observable } from 'rxjs';
import {
  CreateOrdersGQL,
  CreateOrdersMutation,
  GetOrdersDocument,
  GetOrdersGQL,
  GetOrdersQuery,
  Orders_Bool_Exp,
  Orders_Order_By,
  Orders_Set_Input,
  UpdateOrderGQL,
} from 'src/generated/graphql';
@Injectable({
  providedIn: 'root',
})
export class OrdersService {
  constructor(
    private getOrdersGQL: GetOrdersGQL,
    private createOrdersGQL: CreateOrdersGQL,
    private updateOrderGQL: UpdateOrderGQL
  ) {}
  getOrders(
    limit = 10,
    offset = 0,
    condition: Orders_Bool_Exp = {},
    orderBy: Orders_Order_By
  ): QueryRef<GetOrdersQuery> {
    return this.getOrdersGQL.watch(
      { limit, offset, condition, orderBy },
      {
        fetchPolicy: 'network-only',
        partialRefetch: true,
        errorPolicy: 'all',
        pollInterval: 5 * 1000,
      }
    );
  }

  createOrder(
    input: Orders_Set_Input
  ): Observable<
    FetchResult<CreateOrdersMutation, Record<string, any>, Record<string, any>>
  > {
    return this.createOrdersGQL.mutate(
      { input },
      {
        update: (cache, { data }) => {
          const existingOrders: any = cache.readQuery({
            query: GetOrdersDocument,
            variables: {
              limit: 1,
            },
          });
          console.log(existingOrders);
          const created = data.insert_orders_one;
          console.log(created);
          cache.writeQuery({
            query: GetOrdersDocument,
            data: {
              orders: [...existingOrders.orders, created],
              orders_aggregate: existingOrders.orders_aggregate,
            },
          });
        },
      }
    );
  }

  updateOrder(order: Orders_Set_Input) {
    return this.updateOrderGQL.mutate(
      { id: order.id, set: order },
      {
        update: (cache, { data }) => {
          const existingOrders: any = cache.readQuery({
            query: GetOrdersDocument,
            variables: {
              limit: 1,
            },
          });
          console.log(existingOrders);
          const updated = data.update_orders_by_pk;
          console.log(updated);
          cache.writeQuery({
            query: GetOrdersDocument,
            data: {
              orders: [updated, ...existingOrders.orders],
              orders_aggregate: existingOrders.orders_aggregate,
            },
          });
        },
      }
    );
  }
}
