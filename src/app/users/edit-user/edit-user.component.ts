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
  switchMap,
} from 'rxjs';
import { RoleLabels } from 'src/app/core/role-labels';
import { Valido } from 'src/app/core/valido';
import { SettlementsService } from 'src/app/settlements/settlements-service.service';
import {
  AutoSuggestSettlementsQuery,
  Role_Types_Enum,
  Settlements,
  Users,
} from 'src/generated/graphql';
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
    //      id - integer, primary key, unique, default: nextval('users_id_seq'::regclass)
    //       name - text
    //       surname - text
    //      family - text

    //        egn - text, unique
    //        email - text, nullable
    //        pin - text, nullable
    //                password - text, nullable

    //    addressId - integer
    //         voted - boolean, default: false
    //         eVoted - boolean, default: false
    //         role - text, default: 'user'::text
    //         secondRole - text, nullable

    this.form = this.fb.group({
      id: [this.user?.id],

      name: [this.user?.name, Validators.required],
      surname: [this.user?.surname, Validators.required],
      family: [this.user?.family, Validators.required],

      egn: [this.user?.egn, Validators.required],
      email: [this.user?.email, Validators.required],
      pin: [this.user?.pin, Validators.required],

      roleType: [
        this.user ? this.user?.roleType?.value : 'user',
        Validators.required,
      ],
      secondRoleType: [this.user?.secondRoleType?.value, Validators.required],
      // address

      districtName: [null],
      districtId: [null],
      // municipalityName: [null],
      // municipalityId: [null],
      // settlementsName: [null],
      // settlementId: [null],
      settlementName: [null],
      settlementId: [this.user?.address.settlementId],

      addressId: [this.user?.addressId],
      description: [this.user?.address.description],
      number: [this.user?.address.number],
      street: [this.user?.address.street],

      // description: null
      // number: 10
      // settlementId: 3382
      // street: "Borisova"

      // address: this.fb.array([  ]),

      // company: null,
      // firstName: [null, Validators.required],
      // lastName: [null, Validators.required],
      // address: [null, Validators.required],
      // address2: null,
      // city: [null, Validators.required],
      // state: [null, Validators.required],
      // postalCode: [
      //   null,
      //   Validators.compose([
      //     Validators.required,
      //     Validators.minLength(5),
      //     Validators.maxLength(5),
      //   ]),
      // ],
      // shipping: ['free', Validators.required],
    });

    this.form.get('roleType').disable(); // .controls.roleType.disable();
  }
  attachAutocompleteListeners() {
    this.districts$ = this.searchTextDist.pipe(
      debounceTime(500),
      switchMap((value) => {
        this.loading.next(true);

        return this.settlementsService.autoSuggestDistricts(value).pipe(
          map(({ data, loading }) => {
            this.loading.next(loading);
            this.districts.next(data.settlements);
            return data.settlements;
          })
        );
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
      console.log(this.form.value.districtName);
      this.searchTextDist.next(this.form.value.districtName);
    } else if (what === 'settlement') {
      this.searchTextSettle.next(this.form.value.settlementName);
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

    this.form.get('settlementName').setValue(null);
    this.form.get('settlementId').setValue(null);
    // clear and address ...
    // this.form.controls.districtId.setValue(partner.id);

    // clear next fields
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
    const formData = this.form.getRawValue();
    console.log(formData);
  }
}
