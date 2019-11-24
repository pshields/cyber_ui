import {Injectable} from '@angular/core';

import {BehaviorSubject, Subject} from 'rxjs';
import {filter} from 'rxjs/operators';

import {CyberUiTimeboxService} from '../../util/timebox/service';

import {AttentionalAgendaEvent} from './defs/event';
import {CyberUiAttentionalAgendaItemOptions} from './defs/attentional_agenda_item_options';
import {AttentionalAgendaItemId} from './defs/item_id';

import {CyberUiAttentionalAgendaItem} from './attentional_agenda_item';
import {CyberUiAttentionalAgendaSnapshot} from './attentional_agenda_snapshot';


// A service for managing subjects of the user's attention
@Injectable({providedIn: 'root'})
export class CyberUiAttentionalAgendaService {

  // Observable of the current attentional agenda state
  readonly state = new BehaviorSubject(new CyberUiAttentionalAgendaSnapshot({items: []}));

  // The current attentional agenda items (private)
  private items: CyberUiAttentionalAgendaItem[] = [];

  // Events stream that consumers may listen to
  readonly events = new Subject<AttentionalAgendaEvent>();

  // Counter used to generate agenda item ids
  // Note: starts at 1 instead of 0 to avoid bugs around 0 being falsy
  private idCounter = 1;

  constructor(
    readonly timeboxService: CyberUiTimeboxService,
  ) {
    // When a timebox corresponding to an agenda item expires, emit a timer expiration event
    timeboxService
      .events
      .pipe(filter(e => e.type === 'end'))
      .subscribe(e => {
        // Find the agenda item corresponding to this timebox, if applicable
        const item = this.items.find(item => item.timeboxId === e.timeboxId);
        if (item) {
          this.events.next({
            type: 'timer-expiration',
            itemId: item.id,
          });
        }
      });
  }

  // Adds an item with the given options to the user's attentional agenda
  addItemToAttentionalAgenda(
    options: CyberUiAttentionalAgendaItemOptions
  ): AttentionalAgendaItemId {
    const id = this.getNewAgendaItemId();
    const newItem = new CyberUiAttentionalAgendaItem(id, options, this);
    this.items.push(newItem);
    // Emit a new state for consumers
    this.emitNewState();
    return id;
  }

  // Returns the attentional agenda item with the given id, or undefined if no match was found
  getItemById(itemId: AttentionalAgendaItemId): CyberUiAttentionalAgendaItem|undefined {
    return this.items.find(item => item.id === itemId);
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

  private getNewAgendaItemId(): number {
    return this.idCounter++;
  }

}
