import {Component, Inject} from '@angular/core';
import {MAT_SNACK_BAR_DATA, MatSnackBarRef} from "@angular/material/snack-bar";

export interface SnackBarData {
  message: string;
}

@Component({
  selector: 'portal-create-confirmation',
  templateUrl: './save-confirmation.component.html',
  styleUrls: ['./save-confirmation.component.scss']
})
export class SaveConfirmationComponent {

  constructor(@Inject(MAT_SNACK_BAR_DATA) public data: SnackBarData,
              private snackBarRef: MatSnackBarRef<SaveConfirmationComponent>) {
  }

}
