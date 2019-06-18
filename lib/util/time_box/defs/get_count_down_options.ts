import {TimeBoxId} from './time_box_id';


export interface GetCountDownOptions {
  timeBoxId: TimeBoxId;
  // The period, in milliseconds, by which to recalculate the time remaining (default: 1000)
  period?: number;
}
