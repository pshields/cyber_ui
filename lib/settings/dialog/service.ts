import {Injectable} from '@angular/core';

import {MatDialog} from '@angular/material';

import {SettingsSectionConfig} from '../interfaces/section_config';

import {CyberUiSettingsDialogComponent} from './component';


@Injectable({providedIn: 'root'})
export class CyberUiSettingsDialogService<SETTINGS_T = {}> {

  constructor(readonly matDialog: MatDialog) {}

  // Opens a settings dialog, and returns a Promise which will emit the result
  open(
      // The settings data model object to mutate
      model: SETTINGS_T,
      // The settings config, governing layout of the settings
      config: SettingsSectionConfig,
  ): Promise<string|undefined> {
    return this.matDialog.open(CyberUiSettingsDialogComponent, {
      data: {model, config}
    }).afterClosed().toPromise();
  }

}
