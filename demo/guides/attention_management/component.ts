import {Component} from '@angular/core';

import {CyberUiAttentionalAgendaService} from 'lib/public_api';
import {CyberUiAttentionalAgendaSnapshot} from 'lib/public_api';
import {CyberUiAttentionalAgendaItemOptions} from 'lib/public_api';


@Component({
  selector: 'attention-management-guide-component',
  templateUrl: 'component.html',
  styleUrls: ['component.scss'],
})
export class AttentionManagementGuideComponent {

  // The current composition of the attentional agenda
  agenda: CyberUiAttentionalAgendaSnapshot;

  demoItemsAdded = 0;
  // The contents of the 'Item label' input field for new items
  demoAgendaItemInput = this.getNextPlaceholder();
  demoAgendaItemRouterLink = '';
  demoAgendaItemTimeboxDuration = '50';

  constructor(
    readonly attentionalAgendaService: CyberUiAttentionalAgendaService,
  ) {
    attentionalAgendaService.getState().subscribe(snapshot => {
      this.agenda = snapshot;
    });
  }

  addItemToAgenda() {
    const options: CyberUiAttentionalAgendaItemOptions = {
      label: this.demoAgendaItemInput,
    };
    const minutes = parseInt(this.demoAgendaItemTimeboxDuration);
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

}
