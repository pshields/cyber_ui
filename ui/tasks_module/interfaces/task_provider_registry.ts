import {Observable} from 'rxjs';

import {Task} from './task';
import {TaskProvider, TaskProviderId, TaskProviderGetTasksOptions} from './task_provider';


export interface TaskProviderRegistry {
  // Registers the given task provider into the registry under the given id
  registerProvider(id: TaskProviderId, provider: TaskProvider): void;

  // Returns a copy of the list of current providers
  getProviders(): TaskProvider[];

  // Returns an observable emitting the current list of tasks
  getTasks(options: TaskProviderGetTasksOptions): Observable<Task[]>;
}
