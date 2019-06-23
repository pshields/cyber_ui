import {Component, Inject} from '@angular/core';

import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {MatSnackBar} from '@angular/material/snack-bar';

import * as msgs from './messages';
import {CyberUiEditDialogParams} from './params';
import {saveActionHandler} from './util';


@Component({
  selector: 'cyber-ui-edit-dialog',
  templateUrl: './component.html',
})
export class CyberUiEditDialogComponent {
  // The title of the edit dialog
  title: string;

  constructor(
    // Reference to the containing dialog
    readonly dialogRef: MatDialogRef<CyberUiEditDialogComponent>,
    // Reference to the params object for this component
    @Inject(MAT_DIALOG_DATA) readonly params: CyberUiEditDialogParams,
    readonly snackbar: MatSnackBar,
  ) {
    // Update the dialog title to reflect the content type being edited
    this.title = this.getTitle(params.contentTypeLabel);
  }

  saveAndClose() {
    // if there was a save function provided, or if the model exposes
    // a save method, call that and close the dialog
    // TODO Test that model.save() gets called if params.saveFn is not provided
    // TODO Test that model.save() gets called with the correct 'this' binding
    // TODO Remove 'any' types once params.model uses CyberUiSavableModel type
    let saveFn = this.params.saveFn;
    if (!saveFn && (this.params.model as any).save) {
      saveFn = () => (this.params.model as any).save();
    }
    if (saveFn) {
      saveActionHandler(saveFn, this.snackbar, {
        dialogRef: this.dialogRef
      });
    } else {
      // Close the containing dialog without taking any further action
      this.dialogRef.close();
    }
  }

  getTitle(contentTypeLabel: string) {
    if (contentTypeLabel) {
      return `Edit ${contentTypeLabel}`;
    } else {
      return msgs.DEFAULT_EDIT_DIALOG_TITLE;
    }
  }
}
