import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { BehaviorSubject } from 'rxjs';
import { PoliticalGroupTypesLabels } from 'src/app/core/political-group-types-labels';
import { Valido } from 'src/app/core/valido';
import {
  Political_Groups,
  Political_Groups_Insert_Input,
  Political_Groups_Set_Input,
  Political_Group_Types_Enum,
} from 'src/generated/graphql';
import { PoliticalGroupsService } from '../political-groups-service';

@Component({
  selector: 'app-edit-political-group',
  templateUrl: './edit-political-group.component.html',
  styleUrls: ['./edit-political-group.component.scss'],
})
export class EditPoliticalGroupComponent implements OnInit {
  politicalGroupTypesEnum = Political_Group_Types_Enum;
  labels = PoliticalGroupTypesLabels;
  form: FormGroup;
  politicalGroup: Political_Groups;
  private loading: BehaviorSubject<boolean> = new BehaviorSubject(
    this.data ? false : true
  );
  loading$ = this.loading.asObservable();

  constructor(
    private politicalGroupsService: PoliticalGroupsService,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private dialogRef: MatDialogRef<EditPoliticalGroupComponent>,
    private fb: FormBuilder,
    public valido: Valido,
    private snackBar: MatSnackBar
  ) {
    this.politicalGroup = this.data.politicalGroup;
  }
  ngOnInit(): void {
    this.duildForm(undefined);
  }
  private duildForm(politicalGroup: Political_Groups) {
    this.form = this.fb.group({
      type: [this.politicalGroup?.type, Validators.required],
      name: [this.politicalGroup?.name, Validators.required],
      description: [this.politicalGroup?.description, Validators.required],
    });
  }
  close() {
    this.dialogRef.close({ result: 'closed' });
  }
  onSubmit(): void {
    if (this.form.invalid) {
      this.valido.validateAllFormFields(this.form);
      return;
    }
    this.loading.next(true);
    let formData = this.form.getRawValue();
    if (this.politicalGroup) {
      const politicalGroupSet: Political_Groups_Set_Input = {
        name: formData.name,
        description: formData.description,
        type: formData.type,
      };
      this.politicalGroupsService
        .updatePoliticalGroup(this.politicalGroup.id, politicalGroupSet)
        .subscribe(({ data, errors }) => {
          if (errors) {
            console.log(errors);
            this.snackBar.open('Нещо се обърка.', '', {
              duration: 5000,
            });
            this.loading.next(false);
            this.dialogRef.close({ result: 'failed' });
          } else {
            this.snackBar.open('Данните бяха обновени успешно', '', {
              duration: 5000,
            });
            this.loading.next(false);
            this.dialogRef.close({ result: 'success' });
          }
        });
    } else {
      const politicalGroupInput: Political_Groups_Insert_Input = {
        name: formData.name,
        description: formData.description,
        type: formData.type,
      };
      this.politicalGroupsService
        .createPoliticalGroup(politicalGroupInput)
        .subscribe(({ data, errors }) => {
          if (errors) {
            console.log(errors);
            this.snackBar.open('Нещо се обърка.', '', {
              duration: 5000,
            });
            this.loading.next(false);
            this.dialogRef.close({ result: 'failed' });
          } else {
            this.snackBar.open('Данните бяха добавени успешно', '', {
              duration: 5000,
            });
            this.loading.next(false);
            this.dialogRef.close({ result: 'success' });
          }
        });
    }
  }
}
