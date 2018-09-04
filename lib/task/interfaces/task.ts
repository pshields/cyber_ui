import {Action} from './action';


// A task to be shown to a user
// This interface is currently highly experimental and likely to change over time
export interface Task {
  // The label of this task
  // The only reason this wouldn't be present would be if the user is adding a new task and hasn't given it a label yet
  label?: string;

  // Actions that the user can take in response to being shown this task
  actions?: Action<any, any>[];

  // The ID of the task provider who provided this task
  // This should be specified whenever possible
  providerId?: string;

  // A component to render the body of a task (such as notes or a description)
  // TODO Figure out a better type here, or document why 'any' is necessary
  // I'd like to use TaskBodyComponent<Task> here, but ran into issues
  bodyComponent?: any;

  // The component to use to render the task's actions
  // If omitted, a reasonable default will be used
  actionsDisplayComponent?: any;
}
