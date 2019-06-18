import {TimeBoxId} from './time_box_id';


export interface TimeBoxEvent {

  // The type of event (is a new timebox starting, or is one ending?)
  type: 'start' | 'end' | 'cancel';

  // The id of the time box this event corresponds to
  timeBoxId: TimeBoxId;

}
