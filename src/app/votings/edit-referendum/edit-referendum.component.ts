import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { isNullOrUndefined } from 'is-what';
import { Valido } from 'src/app/core/valido';
import { EditReferendumTableDataSource } from '../edit-referendum-table/edit-referendum-table-datasource';

@Component({
  selector: 'app-referendum-edit',
  templateUrl: './edit-referendum.component.html',
  styleUrls: ['./edit-referendum.component.scss'],
})
export class EditReferendumComponent implements OnInit {
  datasource: EditReferendumTableDataSource;
  form: FormGroup;

  isUpdate: boolean;
  constructor(
    private fb: FormBuilder,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private dialogRef: MatDialogRef<EditReferendumComponent>,
    public valido: Valido
  ) {}
  ngOnInit(): void {
    console.log(this.data);
    this.isUpdate = !isNullOrUndefined(this.data.referendum);

    this.buildForm();
    this.datasource = new EditReferendumTableDataSource();
  }
  buildForm() {
    this.form = this.fb.group({
      name: [null, Validators.required],
      description: [null, Validators.required],
    });
  }
  addQuestion() {}

  onSubmit(): void {
    if (this.form.invalid) {
      this.valido.validateAllFormFields(this.form);
      return;
    }

    const formData = this.form.getRawValue();
    console.log(formData);
  }
}
