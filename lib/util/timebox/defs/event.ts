import {TimeboxId} from './timebox_id';


export interface TimeboxEvent {

  // The type of event (is a new timebox starting, or is one ending?)
  type: 'start' | 'end' | 'cancel' | 'modify';

  // The id of the time box this event corresponds to
  timeboxId: TimeboxId;

}
