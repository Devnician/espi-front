import { Component, Inject, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';
import { MatDatepickerInputEvent } from '@angular/material/datepicker';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { isNullOrUndefined } from 'is-what';
import * as _ from 'lodash';
import * as moment from 'moment';
import {
  BehaviorSubject,
  debounceTime,
  map,
  Observable,
  of,
  switchMap,
} from 'rxjs';
import { LoggedUser } from 'src/app/auth/logged-user.interface';
import { Valido } from 'src/app/core/valido';
import { VotingsTypesLabels } from 'src/app/core/votings-types-labels';
import { SettlementsService } from 'src/app/settlements/settlements-service.service';
import {
  AutoSuggestSettlementsQuery,
  Role_Types_Enum,
  Settlements,
  Votings,
  Votings_Insert_Input,
  Votings_Set_Input,
  Voting_Types_Enum,
} from 'src/generated/graphql';
import { VotingsService } from '../voting-service.service';
@Component({
  selector: 'app-edit-voting',
  templateUrl: './edit-voting.component.html',
  styleUrls: ['./edit-voting.component.scss'],
})
export class EditVotingComponent implements OnInit {
  private loading: BehaviorSubject<boolean> = new BehaviorSubject(
    this.data ? false : true
  );
  loading$ = this.loading.asObservable();
  form: FormGroup;
  voting: Votings;
  types = [
    Voting_Types_Enum.Parliamentary,
    Voting_Types_Enum.Presidential,
    Voting_Types_Enum.LocalGovernment,
    Voting_Types_Enum.Mayoral,
  ];
  labels = VotingsTypesLabels;
  private user: LoggedUser;
  minDate = moment().endOf('day');
  isUpdate: BehaviorSubject<boolean> = new BehaviorSubject(false);
  isUpdate$ = this.isUpdate.asObservable();
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
  isLocal: BehaviorSubject<boolean> = new BehaviorSubject(false);

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private dialogRef: MatDialogRef<EditVotingComponent>,
    private fb: FormBuilder,
    public valido: Valido,
    private snackBar: MatSnackBar,
    private votingService: VotingsService,
    private settlementsService: SettlementsService
  ) {
    this.voting = data.voting;
    this.user = this.data.user;
    this.isUpdate.next(!isNullOrUndefined(this.voting));
    this.buildForm();
    this.attachAutocompleteListeners();
    this.isLocal.next(!isNullOrUndefined(this.voting?.settlement));
    if (this.isLocal.getValue()) {
      console.log('add validators');
      ['districtId', 'settlementId'].forEach((element) => {
        const control: AbstractControl = this.form.get(element);
        control.setValidators([Validators.required]);
        control.updateValueAndValidity();
      });
    }

    if (this.isUpdate) {
      if (
        !(
          this.user.roleType.value === Role_Types_Enum.CentralLeader ||
          this.user?.secondRoleType.value === Role_Types_Enum.CentralLeader
        )
      ) {
        this.form.get('locked').disable();
      }
    }
  }
  ngOnInit(): void {}
  buildForm() {
    // locked - boolean, default: false

    this.form = this.fb.group({
      type: [this.voting?.type, Validators.required],
      name: [this.voting?.name, Validators.required],
      description: [this.voting?.description, Validators.required],
      locked: [this.voting ? this.voting.locked : false],
      startDate: [this.voting?.startDate],

      districtName: [this.voting?.settlement?.parentSettlement.name],
      districtId: [this.voting?.settlement?.parentSettlement.id],
      settlementName: [this.voting?.settlement?.name],
      settlementId: [this.voting?.settlement?.id],
    });
  }
  attachAutocompleteListeners() {
    this.districts$ = this.searchTextDist.pipe(
      debounceTime(500),
      switchMap((value) => {
        if (value) {
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
        const districtId = this.form.controls['districtId'].value;
        if (districtId) {
          this.loading.next(true);

          return this.settlementsService
            .autoSuggestSettlements(value, districtId)
            .pipe(
              map(({ data, loading }) => {
                this.loading.next(loading);
                this.settlements.next(data.settlements);
                return data.settlements;
              })
            );
        }
        return of();
      })
    );
  }

  onDistrictSelected() {
    const district: Settlements = _.first(
      this.districts.value.filter(
        (dist) => dist.name === this.form.value.districtName
      )
    );
    this.form.get('districtId').setValue(district.id);
    // clear and the settlement ...
    this.form.get('settlementName').setValue(null);
    this.form.get('settlementId').setValue(null);
  }
  isSettlementAutoDisabled(): boolean {
    return isNullOrUndefined(this.form.get('districtId')?.value);
  }

  onSettlementSelected() {
    const settlement: Settlements = _.first(
      this.settlements.value.filter(
        (muni) => muni.name === this.form.value.settlementName
      )
    );
    this.form.get('settlementId').setValue(settlement.id);
  }
  /**
   * On search by districtName
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

  lockStateChanged(a: any) {
    this.snackBar.open(
      `След запис на данните, редакцията ще е ${
        a.value === true ? '' : 'не'
      }възможна`,
      'OK',
      {}
    );
  }
  onDateSelected(type: any, event: MatDatepickerInputEvent<Date>): void {
    this.minDate = moment().endOf('day');
  }
  close() {
    this.dialogRef.close();
  }

  onTypeChanged(votingType: any) {
    if (
      votingType === Voting_Types_Enum.LocalGovernment ||
      votingType === Voting_Types_Enum.Mayoral
    ) {
      this.isLocal.next(true);
      console.log('show settlement selector...');
      ['districtId', 'settlementId'].forEach((element) => {
        const control: AbstractControl = this.form.get(element);
        control.setValidators([Validators.required]);
        control.updateValueAndValidity();
      });
    } else {
      this.isLocal.next(false);
      this.form.get('districtId').setValue(null);
      this.form.get('districtName').setValue(null);
      this.form.get('settlementId').setValue(null);
      this.form.get('settlementName').setValue(null);

      ['districtId', 'settlementId'].forEach((element) => {
        const control: AbstractControl = this.form.get(element);
        control.setValidators(null);
        control.setErrors(null);
        control.updateValueAndValidity();
      });
    }
  }

  onSubmit(): void {
    if (this.form.invalid) {
      this.valido.validateAllFormFields(this.form);
      return;
    }

    this.loading.next(true);

    const formData = this.form.getRawValue();

    const day = moment(formData.startDate);
    formData.startDate = day.startOf('day').toDate();

    if (this.isUpdate.value) {
      const set: Votings_Set_Input = {
        name: formData.name,
        description: formData.description,
        startDate: formData.startDate,
        settlementId: formData.settlementId,
        type: formData.type,
      };
      this.votingService
        .updateVoting(this.voting.id, set)
        .subscribe((response) => {
          console.log(response);
          this.loading.next(false);
          if (response.errors) {
            return;
          }

          if (response.data) {
            this.snackBar.open('Данните бяха променени успешно', 'OK', {
              duration: 3500,
            });
            this.dialogRef.close({
              success: true,
              result: response.data.update_votings_by_pk,
            });
          } else {
            this.dialogRef.close({ success: false });
          }
        });
    } else {
      const insert: Votings_Insert_Input =
        //formData;
        {
          name: formData.name,
          description: formData.description,
          startDate: formData.startDate,
          settlementId: formData.settlementId,
          type: formData.type,
        };

      this.votingService.createVoting(insert).subscribe((response) => {
        this.loading.next(false);
        if (response.errors) {
          console.log(response.errors);
          return;
        }

        if (response.data) {
          this.snackBar.open('Данните Ви бяха добавени успешно', 'OK', {
            duration: 3500,
          });
          this.dialogRef.close({
            success: true,
            result: response.data.insert_votings_one,
          });
        } else {
          this.dialogRef.close({ success: false });
        }
      });
    }
  }
}
