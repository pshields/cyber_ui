import {Component, Input} from '@angular/core';

import {CyberUiAttentionalAgendaItem} from '../attentional_agenda_item';


@Component({
  selector: 'cyber-ui-attentional-agenda-item-display',
  templateUrl: 'component.html',
  styleUrls: ['component.scss'],
})
export class CyberUiAttentionalAgendaItemDisplayComponent {
  @Input() item: CyberUiAttentionalAgendaItem;
}
