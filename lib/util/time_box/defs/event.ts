import {TimeboxId} from './time_box_id';


export interface TimeboxEvent {

  // The type of event (is a new timebox starting, or is one ending?)
  type: 'start' | 'end' | 'cancel';

  // The id of the time box this event corresponds to
  timeboxId: TimeboxId;

}
