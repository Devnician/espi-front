import { Injectable } from '@angular/core';
import { GetDistrictsGQL } from 'src/generated/graphql';

@Injectable({
  providedIn: 'root',
})
export class SettlementsService {
  constructor(private GetDistrictsGQL: GetDistrictsGQL) {}

  public getDistricts() {
    return this.GetDistrictsGQL.fetch();
  }
}
