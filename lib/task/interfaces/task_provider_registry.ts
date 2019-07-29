import {Observable} from 'rxjs';

import {Task} from './task';
import {TaskProvider, TaskProviderId, TaskProviderGetTasksOptions} from './task_provider';
import {TaskSuggestion} from './task_suggestion';


export interface TaskProviderRegistry<TASK_T extends Task> {
  // Registers the given task provider into the registry under the given id
  registerProvider(id: TaskProviderId, provider: TaskProvider<TASK_T>): void;

  // Returns a copy of the list of current providers
  getProviders(): TaskProvider<TASK_T>[];

  // Returns an observable emitting the current list of tasks
  getTasks(options: TaskProviderGetTasksOptions): Observable<TaskProviderRegistryGetTasksResponse<TASK_T>>;
}

export interface TaskProviderRegistryGetTasksResponse<TASK_T extends Task = Task> {
  suggestions: TaskSuggestion<TASK_T>[];
}
