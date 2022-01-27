import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { isNullOrUndefined } from 'is-what';
import * as _ from 'lodash';
import {
  BehaviorSubject,
  debounceTime,
  map,
  Observable,
  of,
  switchMap,
} from 'rxjs';
import { RoleLabels } from 'src/app/core/role-labels';
import { Valido } from 'src/app/core/valido';
import { SettlementsService } from 'src/app/settlements/settlements-service.service';
import {
  Addresses_Insert_Input,
  AutoSuggestSettlementsQuery,
  Role_Types_Enum,
  Settlements,
  Users,
  Users_Insert_Input,
} from 'src/generated/graphql';
import { UsersService } from '../users-service';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.scss'],
})
export class EditUserComponent implements OnInit {
  form: FormGroup;
  user: Users;
  rolesEnum = Role_Types_Enum;
  roleLabels = RoleLabels;

  // district
  districts$: Observable<AutoSuggestSettlementsQuery['settlements'] | any>;
  searchTextDist: BehaviorSubject<string> = new BehaviorSubject(null);
  districts: BehaviorSubject<AutoSuggestSettlementsQuery['settlements']> =
    new BehaviorSubject([]);
  // settlement
  settlements$: Observable<AutoSuggestSettlementsQuery['settlements'] | any>;
  searchTextSettle: BehaviorSubject<string> = new BehaviorSubject(null);
  settlements: BehaviorSubject<AutoSuggestSettlementsQuery['settlements']> =
    new BehaviorSubject([]);

  private loading: BehaviorSubject<boolean> = new BehaviorSubject(
    this.data ? false : true
  );
  loading$ = this.loading.asObservable();

  constructor(
    private fb: FormBuilder,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private dialogRef: MatDialogRef<EditUserComponent>,
    public valido: Valido,
    private settlementsService: SettlementsService,
    private usersService: UsersService,
    private snackBar: MatSnackBar
  ) {
    this.user = this.data.user;
    console.log(data);
  }
  ngOnInit(): void {
    this.buildForm();
    this.attachAutocompleteListeners();
  }

  buildForm() {
    this.form = this.fb.group({
      id: [this.user?.id],
      name: [this.user?.name, Validators.required],
      surname: [this.user?.surname, Validators.required],
      family: [this.user?.family, Validators.required],
      egn: [this.user?.egn, Validators.required],
      email: [this.user?.email, Validators.required],
      pin: [this.user?.pin], //, Validators.required],
      roleType: [
        this.user ? this.user?.roleType?.value : 'user',
        Validators.required,
      ],
      secondRoleType: [this.user?.secondRoleType?.value],
      // address
      districtName: [this.user?.address.settlement.parentSettlement.name],
      districtId: [this.user?.address.settlement.parentId],
      settlementName: [this.user?.address.settlement.name],
      settlementId: [this.user?.address.settlementId],
      addressId: [this.user?.addressId],
      description: [this.user?.address.description],
      number: [this.user?.address.number],
      street: [this.user?.address.street],
    });

    if (this.user) {
      this.districts.next([this.user.address.settlement.parentSettlement]);
      this.settlements.next([this.user.address.settlement]);
    }

    this.form.get('roleType').disable(); // .controls.roleType.disable();
  }
  attachAutocompleteListeners() {
    this.districts$ = this.searchTextDist.pipe(
      debounceTime(500),
      switchMap((value) => {
        if (value) {
          console.log(value);
          this.loading.next(true);

          return this.settlementsService.autoSuggestDistricts(value).pipe(
            map(({ data, loading }) => {
              this.loading.next(loading);
              this.districts.next(data.settlements);
              return data.settlements;
            })
          );
        } else {
          return of([]);
        }
      })
    );

    this.settlements$ = this.searchTextSettle.pipe(
      debounceTime(500),
      switchMap((value) => {
        this.loading.next(true);
        const districtId = this.form.controls['districtId'].value;
        return this.settlementsService
          .autoSuggestSettlements(value, districtId)
          .pipe(
            map(({ data, loading }) => {
              this.loading.next(loading);
              this.settlements.next(data.settlements);
              return data.settlements;
            })
          );
      })
    );
  }

  /**
   * On search by clientName
   */
  onSearch(what: string): any {
    if (what === 'district') {
      const districtName = this.form.value.districtName;
      if (districtName) {
        this.searchTextDist.next(this.form.value.districtName);
      } else {
        this.form.get('districtId').setValue(null);
        this.form.get('settlementName').setValue(null);
        this.form.get('settlementId').setValue(null);
      }
    } else if (what === 'settlement') {
      const settlementName = this.form.value.settlementName;
      if (settlementName) {
        this.searchTextSettle.next(this.form.value.settlementName);
      } else {
        this.form.get('settlementName').setValue(null);
        this.form.get('settlementId').setValue(null);
      }
    }
  }

  onDistrictSelected() {
    const district: Settlements = _.first(
      this.districts.value.filter(
        (dist) => dist.name === this.form.value.districtName
      )
    );
    console.log(this.form.value.districtName);
    console.log(district);
    this.form.get('districtId').setValue(district.id);
    // clear and address ...
    this.form.get('settlementName').setValue(null);
    this.form.get('settlementId').setValue(null);
    this.form.get('addressId').setValue(null);
    this.form.get('description').setValue(null);
    this.form.get('number').setValue(null);
    this.form.get('street').setValue(null);
  }

  isSettlementAutoDisabled(): boolean {
    return isNullOrUndefined(this.form.get('districtId').value);
  }

  onSettlementSelected() {
    const settlement: Settlements = _.first(
      this.settlements.value.filter(
        (muni) => muni.name === this.form.value.settlementName
      )
    );
    this.form.get('settlementId').setValue(settlement.id);
  }

  close() {
    this.dialogRef.close({ resuls: undefined });
  }
  onSubmit(): void {
    if (this.form.invalid) {
      this.valido.validateAllFormFields(this.form);
      return;
    }
    let formData = this.form.getRawValue();
    console.log(formData);
    if (this.user) {
    } else {
      const districtId = formData.districtId;
      // const settlementId = formData.settlementId;
      const address: Addresses_Insert_Input = {
        settlementId: formData.settlementId,
        street: formData.street,
        number: formData.number,
        description: formData.description,
      };
      // addressId: null
      //     id: null
      // pin: "asd"

      this.clearUseless(formData);
      formData as Users;
      const user: Users_Insert_Input = {
        name: formData.name,
        surname: formData.surname,
        family: formData.family,
        egn: formData.egn,
        email: formData.email,
        role: formData.roleType,
        secondRole: formData.secondRoleType,
        address: { data: address },
      };

      console.log(user);
      this.usersService.createUser(user).subscribe((response) => {
        console.log(response);
      });
    }
  }
  clearUseless(formData: any) {
    delete formData.districtId;
    delete formData.settlementId;
    delete formData.districtName;
    delete formData.settlementName;
  }

  //   /**
  //  * Delete this...
  //  */
  //    updateFirst() {
  //     this.dataSource.loading.next(true);
  //     // console.log(this.dataSource.currentPageData.value);
  //     const firstFromPage: Users = _.cloneDeep(
  //       _.first(this.dataSource.currentPageData.value)
  //     );
  //     if (firstFromPage) {
  //       console.log(firstFromPage);
  //       // HERE must clean useless data
  //       delete firstFromPage.address;
  //       delete firstFromPage.createdAt;
  //       delete firstFromPage.updatedAt;
  //       delete firstFromPage.roleType;
  //       delete firstFromPage.secondRoleType;
  //       delete firstFromPage.__typename;

  //       this.usersService
  //         .updateUser(firstFromPage)
  //         .subscribe(({ errors, data }) => {
  //           console.log(errors);
  //           console.log(data);
  //         });
  //       console.log('Update', firstFromPage);
  //     }
  //   }
}
