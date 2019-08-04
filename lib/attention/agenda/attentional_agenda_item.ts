import {TimeboxId} from '../../util/timebox/defs/timebox_id';

import {CyberUiAttentionalAgendaItemOptions} from './defs/attentional_agenda_item_options';

import {CyberUiAttentionalAgendaService} from './service';


export class CyberUiAttentionalAgendaItem {
  // The label for this agenda item (shown in the UI)
  label: string;
  // The timestamp at which this item was added to the agenda
  // If added multiple times, this timestamp refers to the most recent time
  added: number;
  // The id of the associated timebox, if there is one
  timeboxId?: TimeboxId;

  constructor(
    options: CyberUiAttentionalAgendaItemOptions,
    readonly service: CyberUiAttentionalAgendaService,
  ) {
    this.label = options.label;
    this.added = this.getAdded(options);
    this.timeboxId = this.getTimeboxId(options);
  }

  // Returns the value to use for the `added` timestamp
  getAdded(options: CyberUiAttentionalAgendaItemOptions) {
    return options.added || Date.now();
  }

  getTimeboxId(options: CyberUiAttentionalAgendaItemOptions) {
    if (options.timeboxId) return options.timeboxId;
    else if (options.timeboxDuation) {
      return this.service.timeboxService.startTimebox({
        duration: options.timeboxDuation
      }).timeboxId;
    }
  }

}
