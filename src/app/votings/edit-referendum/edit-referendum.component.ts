import { Component, Inject, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { isNullOrUndefined } from 'is-what';
import * as _ from 'lodash';
import { BehaviorSubject } from 'rxjs';
import { LoggedUser } from 'src/app/auth/logged-user.interface';
import { Valido } from 'src/app/core/valido';
import {
  Referendums,
  Referendums_Insert_Input,
  Referendums_Set_Input,
  Referendum_Questions,
  Referendum_Questions_Insert_Input,
  Role_Types_Enum,
} from 'src/generated/graphql';
import { EditReferendumTableDataSource } from '../edit-referendum-table/edit-referendum-table-datasource';
import { VotingsService } from '../voting-service.service';
@Component({
  selector: 'app-referendum-edit',
  templateUrl: './edit-referendum.component.html',
  styleUrls: ['./edit-referendum.component.scss'],
})
export class EditReferendumComponent implements OnInit {
  datasource: EditReferendumTableDataSource;
  form: FormGroup;
  subForm: FormGroup;
  isUpdate: BehaviorSubject<boolean> = new BehaviorSubject(false);
  isUpdate$ = this.isUpdate.asObservable();
  loading: BehaviorSubject<any> = new BehaviorSubject(false);
  loading$ = this.loading.asObservable();
  private origin: Referendums;
  private referendum: Referendums;
  private user: LoggedUser;

  canLock: BehaviorSubject<any> = new BehaviorSubject(false);

  constructor(
    private fb: FormBuilder,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private dialogRef: MatDialogRef<EditReferendumComponent>,
    public valido: Valido,
    private votingService: VotingsService,
    private snackBar: MatSnackBar
  ) {}
  ngOnInit(): void {
    this.referendum = this.data.referendum;
    this.user = this.data.user;
    this.isUpdate.next(!isNullOrUndefined(this.referendum));
    this.buildForm();
    this.datasource = new EditReferendumTableDataSource();
    if (this.isUpdate.value) {
      this.origin = _.cloneDeep(this.referendum);
      this.datasource.data.next(this.referendum.referendumQuestions);
      this.form.addControl('id', new FormControl(this.origin.id));

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
    });
  }

  isSubformDisabled(): boolean {
    return this.form.valid === false;
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
    console.log(a.value);
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

    if (this.isUpdate.value === true) {
      const formData: Referendums_Set_Input = this.form.getRawValue();
      const currentStateOfQuestions = this.datasource.data.value;

      // transform to set_input
      const referendumId = formData.id;
      delete formData.id;
      // transform to set_input
      currentStateOfQuestions.forEach((question) => {
        if (!question.referendumId) {
          question.referendumId = referendumId; // for new questions
        }
        delete question.createdAt;
        delete question.updatedAt;
        delete question.__typename;
      });

      const removedIds = this.datasource.identifiersOfRemovedQuestions;

      this.updateReferendum(
        referendumId,
        formData,
        currentStateOfQuestions,
        removedIds
      );
    } else {
      const formData: Referendums_Insert_Input = this.form.getRawValue();
      const questions = this.datasource.data.value;
      formData.referendumQuestions = { data: questions };
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
