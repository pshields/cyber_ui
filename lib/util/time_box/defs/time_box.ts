import {TimeBoxId} from './time_box_id';


export interface TimeBox {
  // The start time, in milliseconds since the Unix epoch
  start: number;

  // The end time, in milliseconds since the Unix epoch
  end: number;

  // An identifier for this time box, if needing to lookup by ID
  id: TimeBoxId;

  // A reference to the browser timeoutId associated with this time box
  // Used if we need to cancel the time box prematurely
  // This property is optional since it is added after initial object creation
  timeoutId?: number;
}
