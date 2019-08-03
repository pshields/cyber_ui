import {CyberUiAttentionalAgendaItemOptions} from './defs/attentional_agenda_item_options';


export class CyberUiAttentionalAgendaItem {
  label: string;

  constructor(
    options: CyberUiAttentionalAgendaItemOptions
  ) {
    this.label = options.label;
  }

}
