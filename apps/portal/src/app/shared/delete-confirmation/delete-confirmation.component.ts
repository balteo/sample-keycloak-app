import {Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";

export interface DialogData {
  message: string;
}

@Component({
  selector: 'portal-delete-confirmation',
  templateUrl: './delete-confirmation.component.html',
  styleUrls: ['./delete-confirmation.component.scss']
})
export class DeleteConfirmationComponent {

  constructor(@Inject(MAT_DIALOG_DATA) public data: DialogData,
              private dialogRef: MatDialogRef<DeleteConfirmationComponent>) {
  }

  confirmDelete() {
    this.dialogRef.close(true);
  }

  cancelDelete() {
    this.dialogRef.close(false);
  }
}
