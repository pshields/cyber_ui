import {CyberUiAttentionalAgendaItemOptions} from './defs/attentional_agenda_item_options';


export class CyberUiAttentionalAgendaItem {
  // The label for this agenda item (shown in the UI)
  label: string;
  // The timestamp at which this item was added to the agenda
  // If added multiple times, this timestamp refers to the most recent time
  added: number;

  constructor(
    options: CyberUiAttentionalAgendaItemOptions
  ) {
    this.label = options.label;
    this.added = this.getAdded(options);
  }

  // Returns the value to use for the `added` timestamp
  getAdded(options: CyberUiAttentionalAgendaItemOptions) {
    return options.added || Date.now();
  }

}
