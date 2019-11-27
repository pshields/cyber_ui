import {Injectable} from '@angular/core';

import {MatDialog} from '@angular/material/dialog';

import {SettingsSectionConfig} from '../interfaces/section_config';

import {CyberUiSettingsDialogComponent} from './component';
import {CyberUiSettingsDialogData} from './defs/data';


@Injectable({providedIn: 'root'})
export class CyberUiSettingsDialogService {

  constructor(readonly matDialog: MatDialog) {}

  // Opens a settings dialog, and returns a Promise which will emit the result
  open<SETTINGS_T>(
    // The settings data model object to mutate
    model: SETTINGS_T,
    // The settings config, governing layout of the settings
    config: SettingsSectionConfig,
  ): Promise<string|undefined> {
    const data: CyberUiSettingsDialogData<SETTINGS_T> = {model, config};
    return this
      .matDialog
      .open(
        CyberUiSettingsDialogComponent,
        {data},
      )
      .afterClosed()
      .toPromise();
  }

}
