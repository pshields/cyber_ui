import {Injectable} from '@angular/core';

import {MatDialog, MatSnackBar} from '@angular/material';

import {SavableModel} from '../../backends/interfaces/model';
import {CyberUiActionContext} from '../../task/interfaces/action_context';

import {CyberUiEditDialogComponent} from './component';


@Injectable({providedIn: 'root'})
export class CyberUiEditDialogService {

  constructor(
    readonly dialog: MatDialog,
    readonly snackbar: MatSnackBar,
  ) {}

  showEditDialog<MODEL_T extends SavableModel = SavableModel>(
      model: MODEL_T,
      contentTypeLabel = 'content',
  ): Promise<MODEL_T> {
    return new Promise((resolve, reject) => {
      const dialogRef = this.dialog.open(CyberUiEditDialogComponent, {data: {
        contentTypeLabel: contentTypeLabel,
        model: model,
        actions: [
          {
            label: 'SAVE',
            handler: (ctx: CyberUiActionContext) => {
              // Close the dialog. If the save fails, refer the user to the console logs to recover their unsaved data
              ctx.dialogRef.close();
              model.save().then(
                () => this.snackbar.open('Saved'),
                error => {
                  console.error(error);
                  this.snackbar.open('Failed to save - check console logs');
                }
              );
            }
          },
          {
            label: 'CANCEL',
            handler: (ctx: CyberUiActionContext) => ctx.dialogRef.close(),
          }
        ]
      }});
      dialogRef.afterClosed().subscribe(
        () => {},
        error => reject(error),
        () => resolve(model),
      );
    });
  }

}
