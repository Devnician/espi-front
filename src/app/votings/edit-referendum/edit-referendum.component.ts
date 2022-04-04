import { Component, Inject, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { MatDatepickerInputEvent } from '@angular/material/datepicker';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSlideToggleChange } from '@angular/material/slide-toggle';
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
import { SettlementsService } from 'src/app/settlements/settlements-service.service';
import {
  AutoSuggestSettlementsQuery,
  Referendums,
  Referendums_Insert_Input,
  Referendums_Set_Input,
  Referendum_Questions,
  Referendum_Questions_Insert_Input,
  Role_Types_Enum,
  Settlements,
} from 'src/generated/graphql';
import { EditReferendumTableDataSource } from '../edit-referendum-table/edit-referendum-table-datasource';
import { VotingsService } from '../voting-service.service';
@Component({
  selector: 'app-referendum-edit',
  templateUrl: './edit-referendum.component.html',
  styleUrls: ['./edit-referendum.component.scss'],
})
export class EditReferendumComponent implements OnInit {
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

  datasource: EditReferendumTableDataSource;
  form: FormGroup;
  subForm: FormGroup;
  isUpdate: BehaviorSubject<boolean> = new BehaviorSubject(false);
  isUpdate$ = this.isUpdate.asObservable();
  loading: BehaviorSubject<any> = new BehaviorSubject(false);
  loading$ = this.loading.asObservable();
  private origin: Referendums;
  referendum: Referendums;
  private user: LoggedUser;

  canLock: BehaviorSubject<any> = new BehaviorSubject(false);
  minDate = moment().endOf('day');

  constructor(
    private fb: FormBuilder,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private dialogRef: MatDialogRef<EditReferendumComponent>,
    public valido: Valido,
    private votingService: VotingsService,
    private snackBar: MatSnackBar,
    private settlementsService: SettlementsService
  ) {}
  ngOnInit(): void {
    this.referendum = this.data.referendum;
    this.user = this.data.user;
    this.isUpdate.next(!isNullOrUndefined(this.referendum));
    this.buildForm();
    this.attachAutocompleteListeners();
    this.datasource = new EditReferendumTableDataSource();
    if (this.isUpdate.value) {
      this.origin = _.cloneDeep(this.referendum);
      this.datasource.data.next(this.referendum.referendumQuestions);
      this.form.addControl('id', new FormControl(this.origin.id));

      if (this.referendum.startDate) {
        this.minDate = undefined;
      } else {
        this.minDate = moment().endOf('day');
      }

      if (
        this.user.roleType.value === Role_Types_Enum.CentralLeader ||
        this.user?.secondRoleType.value === Role_Types_Enum.CentralLeader
      ) {
        this.canLock.next(true);
      }
    }
  }
  buildForm() {
    this.form = this.fb.group({
      name: [this.referendum?.name, Validators.required],
      description: [this.referendum?.description, Validators.required],
      locked: [this.referendum ? this.referendum.locked : false],
      startDate: [this.referendum?.startDate],

      districtName: [this.referendum?.settlement?.parentSettlement.name],
      districtId: [this.referendum?.settlement?.parentSettlement.id],
      settlementName: [this.referendum?.settlement?.name],
      settlementId: [this.referendum?.settlement?.id],
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

  onDateSelected(type: any, event: MatDatepickerInputEvent<Date>): void {
    // const day = moment(event.value);
    // const selectedStartDate = day.startOf('day').toDate();
    this.minDate = moment().endOf('day');
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

  isChecked(): boolean {
    return !isNullOrUndefined(this.referendum?.settlement);
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

  onTypeChanged(event: MatSlideToggleChange) {
    const tempSettlementFields = ['districtId', 'settlementId'];
    this.datasource.data.next([]);
    if (event.checked) {
      tempSettlementFields.forEach((element) => {
        const control: AbstractControl = this.form.get(element);
        control.setValidators([Validators.required]);
        control.updateValueAndValidity();
      });
    } else {
      this.form.get('districtName').setValue(null);
      this.form.get('settlementName').setValue(null);

      tempSettlementFields.forEach((element) => {
        const control: AbstractControl = this.form.get(element);
        control.reset();
        control.setValidators(null);
        control.updateValueAndValidity();
      });
    }
    this.form.updateValueAndValidity();
  }

  addQuestion(questionField: HTMLInputElement) {
    const oldData = this.datasource.data.value;
    oldData.push({ question: questionField.value } as Referendum_Questions);
    this.datasource.data.next(oldData);
    questionField.value = '';
  }

  onCancel() {
    this.dialogRef.close({ success: false });
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

  onSubmit(): void {
    if (this.form.invalid) {
      this.valido.validateAllFormFields(this.form);
      return;
    }
    this.loading.next(true);

    const formData = this.form.getRawValue();
    delete formData.districtId;
    delete formData.districtName;
    delete formData.settlementName;

    if (this.isUpdate.value === true) {
      const referendumId = formData.id;
      delete formData.id;

      const set: Referendums_Set_Input = formData;
      const currentStateOfQuestions = this.datasource.data.value.map(
        (question) => {
          return {
            referendumId: question.referendumId ? '' : referendumId,
            question: question.question,
          } as Referendum_Questions_Insert_Input;
        }
      );

      const removedIds = this.datasource.identifiersOfRemovedQuestions;

      this.updateReferendum(
        referendumId,
        set,
        currentStateOfQuestions,
        removedIds
      );
    } else {
      const input: Referendums_Insert_Input = formData;
      const questions = this.datasource.data.value.map((question) => {
        return {
          question: question.question,
        };
      });
      input.referendumQuestions = { data: questions };
      this.createReferendum(formData);
    }
  }
  private createReferendum(referendumInsertInput: Referendums_Insert_Input) {
    this.votingService
      .createReferendum(referendumInsertInput)
      .subscribe((response) => {
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
            result: response.data.insert_referendums_one,
          });
        } else {
          this.dialogRef.close({ success: false });
        }
      });
  }
  private updateReferendum(
    referendumId: number,
    referendumSetInput: Referendums_Set_Input,
    questions: Referendum_Questions_Insert_Input[],
    removedQuestionsIds: number[]
  ) {
    this.votingService
      .updateReferendum(
        referendumId,
        referendumSetInput,
        questions,
        removedQuestionsIds
      )
      .subscribe((response) => {
        this.loading.next(false);
        if (response.errors) {
          console.log(response.errors);
          return;
        }

        if (response.data) {
          this.snackBar.open('Данните бяха променени успешно', 'OK', {
            duration: 3500,
          });
          this.dialogRef.close({
            success: true,
            deleted: response.data.delete_referendum_questions,
            inserted: response.data.insert_referendum_questions,
            referendum: response.data.update_referendums_by_pk,
          });
        } else {
          this.dialogRef.close({ success: false });
        }
      });
  }
}
