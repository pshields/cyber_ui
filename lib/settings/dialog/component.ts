import {Component, Inject} from '@angular/core';

import {MAT_DIALOG_DATA} from '@angular/material';

import {SettingsSection} from '../interfaces/section';


@Component({
  selector: 'cyber-ui-settings-dialog',
  templateUrl: './component.html',
})
export class CyberUiSettingsDialogComponent {
  settings: SettingsSection<{}>;

  constructor(
    @Inject(MAT_DIALOG_DATA) readonly data
  ) {
    this.settings = data.settings;
  }
}
