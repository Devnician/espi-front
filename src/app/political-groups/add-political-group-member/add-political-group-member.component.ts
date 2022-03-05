import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { isNullOrUndefined, isObject } from 'is-what';
import { BehaviorSubject, debounceTime } from 'rxjs';
import { Valido } from 'src/app/core/valido';
import { UsersService } from 'src/app/users/users-service';
import {
  Order_By,
  Political_Groups,
  Political_Group_Members_Insert_Input,
  Users,
  Users_Bool_Exp,
} from 'src/generated/graphql';
import { PoliticalGroupsService } from '../political-groups-service';
@Component({
  selector: 'app-add-political-group-member',
  templateUrl: './add-political-group-member.component.html',
  styleUrls: ['./add-political-group-member.component.scss'],
})
export class AddPoliticalGroupMemberComponent implements OnInit {
  form: FormGroup;
  users: BehaviorSubject<Users | any> = new BehaviorSubject([]);
  loading: BehaviorSubject<any> = new BehaviorSubject(true);
  loading$ = this.loading.asObservable();
  group: Political_Groups;
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private fb: FormBuilder,
    private dialogRef: MatDialogRef<AddPoliticalGroupMemberComponent>,
    private userService: UsersService,
    private politicalGroupsService: PoliticalGroupsService,
    public valido: Valido,
    private snackBar: MatSnackBar
  ) {
    this.group = this.data.group;
  }
  ngOnInit(): void {
    this.form = this.fb.group({
      user: [null, Validators.required],
    });
    this.attachListeners();
  }
  private attachListeners() {
    this.form
      .get('user')
      .valueChanges.pipe(debounceTime(800))
      .subscribe((criteria) => {
        if (isObject(criteria)) {
          return;
        }
        criteria = criteria.trim();
        if (criteria.length === 0) {
          return;
        }
        this.findUsersLikeThis(criteria);
      });
    this.loading.next(false);
  }
  findUsersLikeThis(criteria: any) {
    this.loading.next(true);
    const crit = `${criteria}%`;
    const usersBool: Users_Bool_Exp = {
      _and: [
        { egn: { _like: crit } },
        { _not: { political_group_members: {} } },
      ],
    };
    this.userService
      .autocompleteUsers(usersBool, { name: Order_By.Asc })
      .subscribe((response) => {
        this.users.next(response.data.users);
        this.loading.next(false);
      });
  }
  close() {
    this.dialogRef.close();
  }
  public displayWithFunc(user: Users): string {
    if (isNullOrUndefined(user)) {
      return '';
    }

    return this.getText(user);
  }
  getText(user: Users) {
    return (
      user.egn +
      ' - ' +
      user.name +
      ' ' +
      user.surname +
      ' ' +
      user.family +
      ' (' +
      user.address.settlement.name +
      ')'
    );
  }

  onSubmit(): void {
    if (this.form.invalid) {
      this.valido.validateAllFormFields(this.form);
      return;
    }
    const formData = this.form.value;

    const insertInput: Political_Group_Members_Insert_Input = {
      active: true,
      politicalGroupId: this.group.id,
      userId: formData.user.id,
    };

    this.loading.next(true);
    this.politicalGroupsService
      .addPoliticalMember(insertInput)
      .subscribe(({ data, errors }) => {
        this.loading.next(false);
        if (data) {
          this.snackBar.open('Данните бяха добавени успешо.', '', {
            duration: 3500,
          });
          this.dialogRef.close({ success: true });
        } else {
          this.snackBar.open('Нещо се обърка. Моля, опитайте отново.', '', {
            duration: 5500,
          });
          this.dialogRef.close({ success: false });
        }
      });
  }
}
