import {Component} from '@angular/core';

import {CyberUiTimeboxService} from 'lib/public_api';
import {ActiveTimeboxesSnapshot} from 'lib/public_api';


@Component({
  selector: 'timeboxing-guide-component',
  templateUrl: 'component.html',
})
export class TimeboxingGuideComponent {

  // The current list of active timeboxes
  snapshot: ActiveTimeboxesSnapshot;

  constructor(
    readonly timeboxService: CyberUiTimeboxService
  ) {
    timeboxService.getActiveTimeboxes().subscribe(snapshot => {
      this.snapshot = snapshot;
    });
  }

  addTimebox() {
    this.timeboxService.startTimebox({duration: 10000});
  }

}
