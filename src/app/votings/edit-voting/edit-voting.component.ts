import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDatepickerInputEvent } from '@angular/material/datepicker';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { isNullOrUndefined } from 'is-what';
import * as moment from 'moment';
import { BehaviorSubject } from 'rxjs';
import { Valido } from 'src/app/core/valido';
import { VotingsTypesLabels } from 'src/app/core/votings-types-labels';
import { Votings, Voting_Types_Enum } from 'src/generated/graphql';
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

  canLock: BehaviorSubject<any> = new BehaviorSubject(false);
  minDate = moment().endOf('day');
  isUpdate: BehaviorSubject<boolean> = new BehaviorSubject(false);
  isUpdate$ = this.isUpdate.asObservable();
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private dialogRef: MatDialogRef<EditVotingComponent>,
    private fb: FormBuilder,
    public valido: Valido,
    private snackBar: MatSnackBar
  ) {
    console.log(data);
    this.voting = data.voting;
    this.isUpdate.next(!isNullOrUndefined(this.voting));
    this.buildForm();
  }
  buildForm() {
    //     id - integer, primary key, unique, default: nextval('votings_id_seq'::regclass)
    // createdAt - timestamp with time zone, default: now()
    // updatedAt - timestamp with time zone, default: now()
    // startedAt - timestamp with time zone, nullable
    // finishedAt - timestamp with time zone, nullable
    // type - text
    // name - text
    // description - text
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
    // const day = moment(event.value);
    // const selectedStartDate = day.startOf('day').toDate();
    this.minDate = moment().endOf('day');
  }
  close() {
    this.dialogRef.close();
  }
  onSubmit(): void {
    alert('Thanks!');
  }
}
