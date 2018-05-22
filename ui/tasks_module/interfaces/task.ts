// This interface is currently highly experimental and likely to change over time
export interface Task {
  // The label of this task
  // The only reason this wouldn't be present would be if the user is adding a new task object
  // and hasn't given it a label yet
  label?: string;

  // The ID of the task provider who provided this task
  // This should be specified whenever possible
  providerId?: string;
}
