import {Injectable} from '@angular/core';

import {Observable, merge} from 'rxjs';

import {Task} from './task';
import {TaskProvider, TaskProviderGetTasksOptions} from './task_provider';


export interface TaskProviderRegistry {
  // Registers the given task provider into the registry
  registerProvider(provider: TaskProvider): void;

  // Returns a copy of the list of current providers
  getProviders(): TaskProvider[];

  // Returns an observable emitting the current list of tasks
  getTasks(options: TaskProviderGetTasksOptions): Observable<Task[]>;
}
