import {Observable} from 'rxjs';

import {Task} from './task';


// Basically just an ID referring to a provider, to allow provider lookups by ID
export type TaskProviderId = string;


export interface TaskProviderGetTasksOptions {
  deadline?: number;  // deadline in ms to return by, even if not done processing
}


export interface TaskProviderGetTasksResponse<TASK_T extends Task> {
  tasks: TASK_T[];
}


export interface TaskProvider<TASK_T extends Task> {
  // Some providers may emit a single snapshot and complete, while others may expose
  // a realtime view of their data store, and emit a response after each change of state
  // It's not guaranteed that only a single response will be emitted
  getTasks(options: TaskProviderGetTasksOptions): Observable<TaskProviderGetTasksResponse<TASK_T>>;
}
