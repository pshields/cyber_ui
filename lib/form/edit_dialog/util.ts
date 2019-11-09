import {CyberUiActionContext} from '../../action/defs/action_context';
import {MatSnackBar} from '@angular/material/snack-bar';


// This needs to be defined here rather than on EditDialogService in order to avoid 
// a circular reference between the component and service
export function saveActionHandler(
  saveFn: () => Promise<void>,
  snackbar: MatSnackBar,
  ctx: CyberUiActionContext
) {
  // Close the dialog. If the save fails, refer the user to the console logs to recover their unsaved data
  ctx.dialogRef.close();
  saveFn().then(
    () => snackbar.open('Saved'),
    error => {
      console.error(error);
      snackbar.open('Failed to save - check console logs');
    }
  );
}
