import { Component, Inject } from "@angular/core";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog";
import { Users } from "src/generated/graphql";

@Component({
  selector: 'app-modal-confirmation',
  templateUrl: './modal-confirmation.component.html',
  styleUrls: ['./modal-confirmation.component.scss']
})
export class ModalConfirmationComponent {
  user: Users;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private dialogRef: MatDialogRef<ModalConfirmationComponent>
  ) {
    this.user = this.data.user;
  }

  save() {
    this.dialogRef.close({ resutls: "confirm", userId: this.user.id });
  }

  close() {
    this.dialogRef.close({ resuls: undefined });
  }
}
