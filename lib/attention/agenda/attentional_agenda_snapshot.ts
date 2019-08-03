import {CyberUiAttentionalAgendaSnapshotOptions} from './defs/attentional_agenda_snapshot_options';

import {CyberUiAttentionalAgendaItem} from './attentional_agenda_item';


export class CyberUiAttentionalAgendaSnapshot {
  readonly items: CyberUiAttentionalAgendaItem[];

  constructor(
    options: CyberUiAttentionalAgendaSnapshotOptions
  ) {
    this.items = options.items;
  }

  // Returns the item which was most recently added to the agenda
  getMostRecentlyAddedItem(): CyberUiAttentionalAgendaItem {
    return this.items.reduce((mostRecentItem, candidateItem) => {
      if (mostRecentItem && mostRecentItem.added > candidateItem.added) {
        return mostRecentItem;
      } else {
        return candidateItem;
      }
    });
  }
}
