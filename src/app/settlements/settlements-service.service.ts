import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import {
  AutoSuggestSettlementsGQL,
  GetDistrictsGQL,
  Settlements_Bool_Exp,
} from 'src/generated/graphql';

@Injectable({
  providedIn: 'root',
})
export class SettlementsService {
  constructor(
    private GetDistrictsGQL: GetDistrictsGQL,
    private autoSuggestSettlementsGQL: AutoSuggestSettlementsGQL
  ) {}

  public getDistricts() {
    return this.GetDistrictsGQL.fetch();
  }

  public autoSuggestDistricts(nameIlike: string): Observable<any> {
    if (nameIlike === null) {
      return of({ data: { settlements: [] } });
    }
    nameIlike = nameIlike && nameIlike.length ? '%' + nameIlike + '%' : '%';

    const cond: Settlements_Bool_Exp = {
      _and: [{ parentId: { _is_null: true } }, { name: { _ilike: nameIlike } }],
    };
    return this.autoSuggestSettlementsGQL.fetch({ condition: cond });
  }

  public autoSuggestSettlements(
    nameIlike: string,
    districtId: number
  ): Observable<any> {
    if (nameIlike === null) {
      return of({ data: { settlements: [] } });
    }
    nameIlike = nameIlike && nameIlike.length ? '%' + nameIlike + '%' : '%';

    const cond: Settlements_Bool_Exp = {
      _and: [
        { parentId: { _eq: districtId } },
        // { isMunicipality: { _eq: true } },
        { name: { _ilike: nameIlike } },
      ],
    };
    return this.autoSuggestSettlementsGQL.fetch({ condition: cond });
  }
}
