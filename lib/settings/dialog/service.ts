import {Injectable} from '@angular/core';

import {MatDialog} from '@angular/material';

import {CyberUiSettingsDialogComponent} from './component';


@Injectable({providedIn: 'root'})
export class CyberUiSettingsDialogService {

  constructor(
    readonly matDialog: MatDialog,
  ) {}

  // Opens a settings dialog, and returns a Promise which will emit the result
  open(): Promise<string|undefined> {
    return this.matDialog.open(CyberUiSettingsDialogComponent).afterClosed().toPromise();
  }
}
