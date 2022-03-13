import { Component, Inject } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Valido } from 'src/app/core/valido';
import { ModalConfirmationComponent } from 'src/app/users/modal-confirmation/modal-confirmation.component';
import { Votings } from 'src/generated/graphql';

@Component({
  selector: 'app-select-voting',
  templateUrl: './select-voting.component.html',
  styleUrls: ['./select-voting.component.scss'],
})
export class SelectVotingComponent {
  votings: Votings[];
  form = this.fb.group({
    votingId: [, Validators.required],
  });
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private dialogRef: MatDialogRef<ModalConfirmationComponent>,
    private fb: FormBuilder,
    public valido: Valido
  ) {
    this.votings = this.data.votings;
  }
  close() {
    this.dialogRef.close({ success: false });
  }

  onSubmit(): void {
    if (this.form.invalid) {
      return;
    } else {
      const formData = this.form.getRawValue();
      this.dialogRef.close({ success: true, votingId: formData.votingId });
    }
  }
}
