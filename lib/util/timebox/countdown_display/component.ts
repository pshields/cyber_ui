import {Component, Input, OnChanges, SimpleChanges} from '@angular/core';

import {Observable} from 'rxjs';

import {TimeboxId} from '../defs/timebox_id';

import {CyberUiTimeboxService} from '../service';


// An opinionated timebox countdown display component
// Strongly coupled to the cyber_ui timebox service implementation
@Component({
  selector: 'cyber-ui-timebox-countdown-display',
  templateUrl: 'component.html'
})
export class CyberUiTimeboxCountdownDisplayComponent implements OnChanges {

  // The id of the timebox to show a countdown for
  @Input() timeboxId: TimeboxId;

  // The countdown
  countdown: Observable<number> | undefined;

  constructor(readonly timeboxService: CyberUiTimeboxService) {}

  ngOnChanges(changes: SimpleChanges) {
    if (changes.timeboxId) {
      this.countdown = this.timeboxService.getCountdown({timeboxId: changes.timeboxId.currentValue})
    }
  }

  addFiveMinutes() {
    this.timeboxService.addTimeToTimebox({
      id: this.timeboxId,
      duration: 5 * 1000 * 60,
    });
    // Update the countdown
    this.countdown = this.timeboxService.getCountdown({timeboxId: this.timeboxId});
  }
}
