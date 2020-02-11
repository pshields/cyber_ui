import {Component} from '@angular/core';

import {MatSnackBar} from '@angular/material/snack-bar';

import {Subscription} from 'rxjs';
import {filter} from 'rxjs/operators';

import {CyberUiAttentionalAgendaService} from 'lib/public_api';
import {CyberUiAttentionalAgendaItemOptions} from 'lib/public_api';
import {TimerExpirationEvent} from 'lib/public_api';


@Component({
  selector: 'attention-management-guide-component',
  templateUrl: 'component.html',
  styleUrls: ['component.scss'],
})
export class AttentionManagementGuideComponent {

  agendaEventsSubscription: Subscription;

  demoItemsAdded = 0;
  // The contents of the 'Item label' input field for new items
  demoAgendaItemInput = this.getNextPlaceholder();
  demoAgendaItemRouterLink = '';
  demoAgendaItemTimeboxDuration = '50';

  constructor(
    readonly attentionalAgendaService: CyberUiAttentionalAgendaService,
    readonly snackbar: MatSnackBar
  ) {
    this.agendaEventsSubscription = attentionalAgendaService
      .events
      .pipe(filter(e => e.type === 'timer-expiration'))
      .subscribe((event: TimerExpirationEvent) => {
        const item = attentionalAgendaService.getItemById(event.itemId);
        this.snackbar.open(`The timer associated with item "${item.label}" has expired`);
      });
  }

  addItemToAgenda() {
    const options: CyberUiAttentionalAgendaItemOptions = {
      label: this.demoAgendaItemInput,
    };
    const minutes = parseFloat(this.demoAgendaItemTimeboxDuration);
    if (this.demoAgendaItemTimeboxDuration && !isNaN(minutes)) {
      options.timeboxDuration = minutes * 60 * 1000;
    }
    if (this.demoAgendaItemRouterLink) {
      options.labelRouterLink = this.demoAgendaItemRouterLink;
    }
    this.attentionalAgendaService.addItemToAttentionalAgenda(options);
    this.demoAgendaItemInput = this.getNextPlaceholder();
  }

  getNextPlaceholder() {
    return `Example item ${++this.demoItemsAdded}`;
  }

  ngOnDestroy() {
    if (this.agendaEventsSubscription && !this.agendaEventsSubscription.closed) {
      this.agendaEventsSubscription.unsubscribe();
    }
  }

}
