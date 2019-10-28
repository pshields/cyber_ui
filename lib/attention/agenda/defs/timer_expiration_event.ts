import {AttentionalAgendaItemId} from './item_id';


export type TimerExpirationEvent = {

  type: 'timer-expiration'

  // The id of the attentional agenda item whose timer has expired
  itemId: AttentionalAgendaItemId;

};
