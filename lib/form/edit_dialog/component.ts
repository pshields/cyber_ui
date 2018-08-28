import {Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';

import * as msgs from './messages';
import {CyberUiEditDialogParams} from './params';


@Component({
  selector: 'cyber-ui-edit-dialog',
  templateUrl: './component.html',
})
export class CyberUiEditDialogComponent {
  // The title of the edit dialog
  title: string;

  constructor(
    readonly dialogRef: MatDialogRef<CyberUiEditDialogComponent>,
    @Inject(MAT_DIALOG_DATA) readonly params: CyberUiEditDialogParams,
  ) {
    // Update the dialog title to reflect the content type being edited
    this.title = this.getTitle(params.contentTypeLabel);
  }

  close() {
    this.dialogRef.close();
  }

  getTitle(contentTypeLabel: string) {
    if (contentTypeLabel) {
      return `Edit ${contentTypeLabel}`;
    } else {
      return msgs.DEFAULT_EDIT_DIALOG_TITLE;
    }
  }
}
