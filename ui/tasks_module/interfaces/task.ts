import {Action} from './action';


// A task to be shown to a user
// This interface is currently highly experimental and likely to change over time
export interface Task {
  // The label of this task
  // The only reason this wouldn't be present would be if the user is adding a new task and hasn't given it a label yet
  label?: string;

  // Actions that the user can take in response to being shown this task
  actions?: Action<{}, {}>[];

  // The ID of the task provider who provided this task
  // This should be specified whenever possible
  providerId?: string;
}
