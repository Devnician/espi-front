import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { RoleLabels } from 'src/app/core/role-labels';
import { Valido } from 'src/app/core/valido';
import { Role_Types_Enum, Users } from 'src/generated/graphql';

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

  constructor(
    private fb: FormBuilder,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private dialogRef: MatDialogRef<EditUserComponent>,
    public valido: Valido,
    private snackBar: MatSnackBar
  ) {
    this.user = this.data.user;
    console.log(data);
  }
  ngOnInit(): void {
    this.buildForm();
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
      addressId: [this.user?.addressId],
      description: [this.user?.address.description],
      number: [this.user?.address.number],
      street: [this.user?.address.street],
      settlementId: [this.user?.address.settlementId],

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
