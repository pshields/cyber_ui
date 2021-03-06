import {Component, Inject, EventEmitter} from '@angular/core';

import {MAT_DIALOG_DATA} from '@angular/material/dialog';

import {SettingsSectionConfig} from '../interfaces/section_config';
import {CyberUiSettingsService} from '../service/service';

import {CyberUiSettingsDialogData} from './defs/data';


@Component({
  selector: 'cyber-ui-settings-dialog',
  templateUrl: './component.html',
})
export class CyberUiSettingsDialogComponent<SETTINGS_T> {
  config: SettingsSectionConfig;
  settings: SETTINGS_T;

  changes = new EventEmitter<SETTINGS_T>();

  constructor(
    @Inject(MAT_DIALOG_DATA) readonly data: CyberUiSettingsDialogData<SETTINGS_T>,
    private readonly settingsService: CyberUiSettingsService,
  ) {
    this.config = data.config;
    this.settings = data.model;
    this.changes.subscribe(settings => {
      this.settingsService.onChange(settings);
    });
  }

  onChange() {
    this.changes.emit(this.settings);
  }
}
