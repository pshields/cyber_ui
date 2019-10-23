import {Injectable} from '@angular/core';

import {Observable, ReplaySubject} from 'rxjs';

import {CyberUiTimeboxService} from '../../util/timebox/service';

import {CyberUiAttentionalAgendaItemOptions} from './defs/attentional_agenda_item_options';

import {CyberUiAttentionalAgendaItem} from './attentional_agenda_item';
import {CyberUiAttentionalAgendaSnapshot} from './attentional_agenda_snapshot';


// A service for managing subjects of the user's attention
@Injectable({providedIn: 'root'})
export class CyberUiAttentionalAgendaService {
  private readonly state = new ReplaySubject<CyberUiAttentionalAgendaSnapshot>(1);
  private items: CyberUiAttentionalAgendaItem[] = [];

  constructor(
    readonly timeboxService: CyberUiTimeboxService,
  ) {}

  addItemToAttentionalAgenda(options: CyberUiAttentionalAgendaItemOptions) {
    const newItem = new CyberUiAttentionalAgendaItem(options, this);
    this.items.push(newItem);
    // Emit a new state for consumers
    this.emitNewState();
  }

  clearItem(item: CyberUiAttentionalAgendaItem) {
    // Remove the item from the agenda
    this.items.splice(this.items.indexOf(item), 1);
    // Emit a new state for consumers
    this.emitNewState();
    // Call the item's onClear() handler, if one was provided
    if (item.onClear) {
      item.onClear();
    }
  }

  private emitNewState() {
    const newState = new CyberUiAttentionalAgendaSnapshot({
      items: this.items
    });
    this.state.next(newState);
  }

  getState(): Observable<CyberUiAttentionalAgendaSnapshot> {
    return this.state;
  }
}
