import {Observable, of} from 'rxjs';

import {TimeboxId} from '../../util/timebox/defs/timebox_id';

import {Action} from '../../task/interfaces/action';

import {AttentionalAgendaItemId} from './defs/item_id';
import {CyberUiAttentionalAgendaItemOptions} from './defs/attentional_agenda_item_options';

import {CyberUiAttentionalAgendaService} from './service';


export class CyberUiAttentionalAgendaItem {
  // The label for this agenda item (shown in the UI)
  label: string;
  // (Optional) the router link to navigate to when the label is clicked
  labelRouterLink?: string;
  // The timestamp at which this item was added to the agenda
  // If added multiple times, this timestamp refers to the most recent time
  added: number;
  // The id of the associated timebox, if there is one
  timeboxId?: TimeboxId;
  // Any custom actions to show for this agenda item
  actions?: Observable<Action[]>;
  // A function to call when this item is cleared from the agenda
  onClear?: () => void;

  constructor(
    // The id for this agenda item (currently unique only locally within an application instance)
    readonly id: AttentionalAgendaItemId,
    options: CyberUiAttentionalAgendaItemOptions,
    readonly service: CyberUiAttentionalAgendaService,
  ) {
    this.label = options.label;
    this.labelRouterLink = options.labelRouterLink;
    this.onClear = options.onClear;
    this.added = this.getAdded(options);
    this.timeboxId = this.getTimeboxId(options);
    this.actions = this.getActions(options);
  }

  // Clears this item from the agenda
  clear() {
    this.service.clearItem(this);
  }

  // Returns the value to use for the `added` timestamp
  private getAdded(options: CyberUiAttentionalAgendaItemOptions) {
    return options.added || Date.now();
  }

  private getTimeboxId(options: CyberUiAttentionalAgendaItemOptions) {
    if (options.timeboxId) return options.timeboxId;
    else if (options.timeboxDuration) {
      return this.service.timeboxService.startTimebox({
        duration: options.timeboxDuration
      }).timeboxId;
    }
  }

  private getActions(options: CyberUiAttentionalAgendaItemOptions) {
    return options.actions || of([]);
  }

}
