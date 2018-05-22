import {Observable} from 'rxjs';

import {Task} from './task';


export interface TaskProviderGetTasksOptions {
  deadline?: number;  // deadline in ms to return by, even if not done processing
}


export interface TaskProvider {
  getTasks(settings: TaskProviderGetTasksOptions): Observable<Task[]>;
}
