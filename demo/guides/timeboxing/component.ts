import {Component, HostBinding} from '@angular/core';

import {CyberUiThemeService} from 'lib/public_api';
import {CyberUiTimeboxService} from 'lib/public_api';
import {ActiveTimeboxesSnapshot} from 'lib/public_api';


@Component({
  selector: 'timeboxing-guide-component',
  templateUrl: 'component.html',
})
export class TimeboxingGuideComponent {

  // The current list of active timeboxes
  snapshot: ActiveTimeboxesSnapshot;

  // The color of the primary text content on page
  // (dynamic based on theme settings)
  @HostBinding('style.color') color: string;

  constructor(
    readonly themeService: CyberUiThemeService,
    readonly timeboxService: CyberUiTimeboxService
  ) {
    timeboxService.getActiveTimeboxes().subscribe(snapshot => {
      this.snapshot = snapshot;
    });
    // Update the text color based on the current theme settings
    themeService.textColor.subscribe(color => {
      this.color = color;
    });
  }

  addTimebox() {
    this.timeboxService.startTimebox({duration: 60000});
  }

}
