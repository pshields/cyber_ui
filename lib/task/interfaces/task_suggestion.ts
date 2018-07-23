import {Task} from './task';


// This interface is currently highly experimental and likely to change over time
export interface TaskSuggestion<TASK_T extends Task> {
  task: TASK_T;
}
