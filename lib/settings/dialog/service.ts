import {Injectable} from '@angular/core';

import {MatDialog} from '@angular/material';

import {SettingsSection} from '../interfaces/section';

import {CyberUiSettingsDialogComponent} from './component';


@Injectable({providedIn: 'root'})
export class CyberUiSettingsDialogService {

  constructor(
    readonly matDialog: MatDialog,
  ) {}

  // Opens a settings dialog, and returns a Promise which will emit the result
  open(settings: SettingsSection): Promise<string|undefined> {
    return this.matDialog.open(CyberUiSettingsDialogComponent, {
      data: {
        settings: settings
      }
    }).afterClosed().toPromise();
  }
}
