import {TimeboxId} from './time_box_id';


export interface GetCountDownOptions {
  timeboxId: TimeboxId;
  // The period, in milliseconds, by which to recalculate the time remaining (default: 1000)
  period?: number;
}
