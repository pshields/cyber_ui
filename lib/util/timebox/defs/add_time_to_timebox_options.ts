import {TimeboxId} from './timebox_id';


export interface AddTimeToTimeboxOptions {
  // The id of the timebox to add time to
  id: TimeboxId;
  // How much time should be added, in milliseconds?
  duration: number;
}
