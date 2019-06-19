import {TimeboxId} from './timebox_id';


export interface GetCountdownOptions {
  // The id of the timebox to show the countdown for
  timeboxId: TimeboxId;
  // The period, in milliseconds, by which to recalculate the time remaining (default: 1000)
  period?: number;
}
