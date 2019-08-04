import {Component} from '@angular/core';

import {CyberUiAttentionalAgendaService} from 'lib/public_api';
import {CyberUiAttentionalAgendaSnapshot} from 'lib/public_api';


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

  constructor(
    readonly attentionalAgendaService: CyberUiAttentionalAgendaService,
  ) {
    attentionalAgendaService.getState().subscribe(snapshot => {
      this.agenda = snapshot;
    });
  }

  addItemToAgenda() {
    this.attentionalAgendaService.addItemToAttentionalAgenda({
      label: this.demoAgendaItemInput,
      timeboxDuation: 50 * 60 * 1000,
    });
    this.demoAgendaItemInput = this.getNextPlaceholder();
  }

  getNextPlaceholder() {
    return `Example item ${++this.demoItemsAdded}`;
  }

}
