import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog-alert',
  templateUrl: './dialog-alert.component.html'
})
export class DialogAlertComponent {
  constructor(public dialogRef: MatDialogRef<DialogAlertComponent>) { }

  public cancel(): void {
    this.dialogRef.close();
  }
}
