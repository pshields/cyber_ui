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
    const newState = new CyberUiAttentionalAgendaSnapshot({
      items: this.items
    });
    this.state.next(newState);
  }

  getState(): Observable<CyberUiAttentionalAgendaSnapshot> {
    return this.state;
  }
}
