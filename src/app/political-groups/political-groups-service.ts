import { Injectable } from '@angular/core';
import {
  GetPoliticalGroupsGQL,
  Political_Groups_Bool_Exp,
  Political_Groups_Order_By,
} from 'src/generated/graphql';

@Injectable({
  providedIn: 'root',
})
export class PoliticalGroupsService {
  constructor(private getGroups: GetPoliticalGroupsGQL) {
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
}
