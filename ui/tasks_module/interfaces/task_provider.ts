import {Observable} from 'rxjs';

import {Task} from './task';


// Basically just an ID referring to a provider, to allow provider lookups by ID
export type ProviderId = string;


export interface TaskProviderGetTasksOptions {
  deadline?: number;  // deadline in ms to return by, even if not done processing
}


export interface TaskProviderGetTasksResponse {
  tasks: Task[];
  providerId: ProviderId;
}


export interface TaskProvider {
  // The ID of this task provider (so tasks can point back to the provider they came from)
  // This should be unique within a given task provider registry
  readonly id: ProviderId;

  // Some providers may emit a single snapshot and complete, while others may expose
  // a realtime view of their data store, and emit a response after each change of state
  // It's not guaranteed that only a single response will be emitted
  getTasks(options: TaskProviderGetTasksOptions): Observable<TaskProviderGetTasksResponse>;
}
