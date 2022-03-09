import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDatepickerInputEvent } from '@angular/material/datepicker';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { isNullOrUndefined } from 'is-what';
import * as moment from 'moment';
import { BehaviorSubject } from 'rxjs';
import { LoggedUser } from 'src/app/auth/logged-user.interface';
import { Valido } from 'src/app/core/valido';
import { VotingsTypesLabels } from 'src/app/core/votings-types-labels';
import {
  Role_Types_Enum,
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
export class EditVotingComponent {
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

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private dialogRef: MatDialogRef<EditVotingComponent>,
    private fb: FormBuilder,
    public valido: Valido,
    private snackBar: MatSnackBar,
    private votingService: VotingsService
  ) {
    this.voting = data.voting;
    this.user = this.data.user;
    this.isUpdate.next(!isNullOrUndefined(this.voting));
    this.buildForm();
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
  buildForm() {
    // locked - boolean, default: false

    this.form = this.fb.group({
      type: [this.voting?.type, Validators.required],
      name: [this.voting?.name, Validators.required],
      description: [this.voting?.description, Validators.required],
      locked: [this.voting ? this.voting.locked : false],
      startDate: [this.voting?.startDate],
    });
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
      //  const id = formData.id;
      delete formData.id;
      const set: Votings_Set_Input = formData;
      this.votingService
        .updateVoting(this.voting.id, set)
        .subscribe((response) => {
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
      const insert: Votings_Insert_Input = formData;

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
