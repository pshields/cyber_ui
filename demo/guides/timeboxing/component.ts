import {Component, HostBinding} from '@angular/core';

import {CyberUiSettingsService} from 'lib/public_api';
import {CyberUiThemeService} from 'lib/public_api';
import {CyberUiTimeboxService} from 'lib/public_api';
import {ActiveTimeboxesSnapshot} from 'lib/public_api';

import {DemoSettings} from '../../app/settings';


@Component({
  selector: 'timeboxing-guide-component',
  templateUrl: 'component.html',
  styleUrls: ['component.scss'],
})
export class TimeboxingGuideComponent {

  // The app settings, which has the pomodoro length setting
  settings: DemoSettings;

  // The current list of active timeboxes
  snapshot: ActiveTimeboxesSnapshot;

  // The color of the primary text content on page
  // (dynamic based on theme settings)
  @HostBinding('style.color') color: string;

  constructor(
    readonly settingsService: CyberUiSettingsService,
    readonly themeService: CyberUiThemeService,
    readonly timeboxService: CyberUiTimeboxService
  ) {
    timeboxService.getActiveTimeboxes().subscribe(snapshot => {
      this.snapshot = snapshot;
    });
    // Keep a reference to the current settings
    settingsService.listen().subscribe(settings => this.settings = settings);
    // Update the text color based on the current theme settings
    themeService.textColor.subscribe(color => {
      this.color = color;
    });
  }

  addTimebox() {
    this.timeboxService.startTimebox({duration: 60000});
  }

  startPomodoro() {
    const pomodoroLength = this.settings && this.settings.pomodoroLength || '20';
    const lengthInMs = Number(pomodoroLength) * 60 * 1000;
    this.timeboxService.startTimebox({duration: lengthInMs});
  }

}
