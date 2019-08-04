import {Component, Input} from '@angular/core';

import {CyberUiAttentionalAgendaSnapshot} from '../attentional_agenda_snapshot';


@Component({
  selector: 'cyber-ui-attentional-agenda-display',
  templateUrl: 'component.html'
})
export class CyberUiAttentionalAgendaDisplayComponent {
  @Input() agenda: CyberUiAttentionalAgendaSnapshot;
}
