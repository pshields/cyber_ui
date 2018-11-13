import {Injectable} from '@angular/core';

import {MatDialog, MatSnackBar} from '@angular/material';

import {CyberUiActionContext} from '../../task/interfaces/action_context';

import {CyberUiEditDialogComponent} from './component';
import {CyberUiEditDialogParams} from './params';
import {saveActionHandler} from './util';


export const CYBER_UI_SHOW_EDIT_DIALOG_CANCEL_ACTION = {
  label: 'CANCEL',
  handler: (ctx: CyberUiActionContext) => ctx.dialogRef.close(),
}


@Injectable({providedIn: 'root'})
export class CyberUiEditDialogService {

  constructor(
    readonly dialog: MatDialog,
    readonly snackbar: MatSnackBar,
  ) {}

  showEditDialog(params: CyberUiEditDialogParams): Promise<typeof params.model> {
    // Fill in empty params with reasonable defaults
    if (params.actions === undefined) {
      params.actions = [];
      // If the model has a 'save' method, add a 'save' action which calls it.
      if (typeof (params.model as any).save === 'function') {
        params.actions.push(this.getSaveAction(() => (params.model as any).save()));
      }
      params.actions.push(CYBER_UI_SHOW_EDIT_DIALOG_CANCEL_ACTION);
    }
    return new Promise((resolve, reject) => {
      const dialogRef = this.dialog.open(CyberUiEditDialogComponent, {data: params});
      dialogRef.afterClosed().subscribe(
        () => {},
        error => reject(error),
        () => resolve(params.model),
      );
    });
  }

  // Given a save function, returns a save Action for use with CyberUiEditDialogService
  getSaveAction(saveFn: () => Promise<void>) {
    return {
      label: 'SAVE',
      handler: ctx => saveActionHandler(saveFn, this.snackbar, ctx),
    };
  }
}
