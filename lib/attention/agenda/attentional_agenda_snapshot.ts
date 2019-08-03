import {CyberUiAttentionalAgendaSnapshotOptions} from './defs/attentional_agenda_snapshot_options';

import {CyberUiAttentionalAgendaItem} from './attentional_agenda_item';


export class CyberUiAttentionalAgendaSnapshot {
  readonly items: CyberUiAttentionalAgendaItem[];

  constructor(
    options: CyberUiAttentionalAgendaSnapshotOptions
  ) {
    this.items = options.items;
  }

  getMostRecentlyAddedItem(): CyberUiAttentionalAgendaItem {
    return this.items[this.items.length - 1];
  }
}
