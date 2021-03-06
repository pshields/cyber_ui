import {Injectable} from '@angular/core';

import {Observable, merge, of, Subscriber} from 'rxjs';

import {Task} from '../interfaces/task';
import {TaskProvider, TaskProviderId, TaskProviderGetTasksResponse} from '../interfaces/task_provider';
import {TaskProviderRegistry, TaskProviderRegistryGetTasksResponse} from '../interfaces/task_provider_registry';
import {TaskSuggestion} from '../interfaces/task_suggestion';

import {CyberUiTaskProviderRegistryGetTasksOptions} from './defs/get_tasks_options';
import {timeout, last} from 'rxjs/operators';


// A highly experimental registry for collecting tasks from multiple providers
//
// I've found attempting to collect all tasks into a single canonical source to be less intuitive
// than one might initially expect. In practice, tasks naturally arise from multiple sources.
// For example, here are three common sources:
//
// 1) a one-for-one "list of tasks" that might come from a database or a simple text file
// 2) a list of parameterized, potentially recurring task templates instantiated in various ways
//    (these might not be one-for-one; a task template such as "Clean the {bedroom, bathroom, kitchen}"
//     could be instantiated into three separate tasks)
// 3) "TODO" annotations in project files
//
// By using a task provider registry, downstream consumers such as task suggestion services don't need to
// worry about where the tasks come from. They can just work with the tasks that they are given.
@Injectable()
export class TaskProviderRegistryService<TASK_T extends Task = Task> implements TaskProviderRegistry<TASK_T> {
  // The list of task providers registered in the registry
  private providers = new Map<TaskProviderId, TaskProvider<TASK_T>>();

  // Registers the given task provider into the registry
  registerProvider(id: TaskProviderId, provider: TaskProvider<TASK_T>): void {
    if (this.providers.has(id)) {
      console.error(`Refusing to register provider with duplicated id '${id}'`);
    } else {
      this.providers.set(id, provider);
    }
  }

  // Returns a copy of the list of current providers
  getProviders(): TaskProvider<TASK_T>[] {
    return Array.from(this.providers.values());
  }

  // Returns an observable emitting the current list of tasks (live-updating after each task provider returns)
  // To get an observable emitting only the final complete list of tasks, call `.last()` on the returned observable
  getTasks(options: CyberUiTaskProviderRegistryGetTasksOptions): Observable<TaskProviderRegistryGetTasksResponse<TASK_T>> {
    // Maintain a mapping from providers to the latest tasks they've returned
    // Note that a given provider may emit multiple responses over time
    // In that case, we need to replace the old set of tasks with the new
    // As a result, just keeping a flat list of tasks returned so far is insufficient
    // We need to know which provider each task came from in order to do the replacement
    const tasksByProvider = new Map<TaskProviderId, TASK_T[]>();
    const providerResponses: {providerId: TaskProviderId, responseObservable: Observable<TaskProviderGetTasksResponse<TASK_T>>}[] = [];
    this.providers.forEach((provider, providerId) => {
      // Only get the tasks from the providers indicated in the request (or all, if no providers were specified)
      if (options.taskProviders === undefined || options.taskProviders.indexOf(providerId) > -1) {
        providerResponses.push({
          providerId: providerId,
          responseObservable: provider.getTasks(options)
        });
      }
    });
    let numProviderCompletions = 0;
    // If there are no active providers, emit an empty response
    if (providerResponses.length === 0) {
      return of({suggestions: []});
    }
    // If there are active providers, combine their responses into a single observable
    let observable = Observable.create((subscriber: Subscriber<TaskProviderRegistryGetTasksResponse<TASK_T>>) => {
      merge(
          providerResponses
          .map(providerResponse => {
            let providerResponseObservable = providerResponse.responseObservable;
            // If the request has a deadline, terminate all provider response observables at the expiration of the deadline
            if (options.deadline) {
              providerResponseObservable = providerResponseObservable.pipe(timeout(options.deadline));
            }
            providerResponseObservable.subscribe((response: TaskProviderGetTasksResponse<TASK_T>) => {
              // Update the tasks associated with this provider
              // Either they were previously undefined (in the case of the initial provider response),
              // or they were previously defined but have become outdated due to the newer response,
              // which might reflect updates to the provider's data store (new tasks, canceled tasks, etc.)
              tasksByProvider.set(providerResponse.providerId, response.tasks);
              let result: TaskSuggestion<TASK_T>[] = [];
              // Collect the full list of tasks from the map
              // It would be nice to use flatMap here, but it's not supported by browsers yet
              tasksByProvider.forEach((tasks, providerId) => result = result.concat(tasks.map(task => {
                return {
                  task: task,
                  providerId: providerId
                }
              })));
              subscriber.next({
                suggestions: result
              });
            },
            error => {
              console.error(error);
              numProviderCompletions += 1;
              // If this is the last provider to complete/error, mark the subscriber as complete
              // (there won't be any more events after this)
              if (numProviderCompletions === providerResponses.length) {
                subscriber.complete();
              }
            },
            () => {
              numProviderCompletions += 1;
              // If this is the last provider to complete/error, mark the subscriber as complete
              // (there won't be any more events after this)
              if (numProviderCompletions === providerResponses.length) {
                subscriber.complete();
              }
            }
          );
        })
      );
    });
    // If options.oneshot is set, return only the final response to the requester
    if (options.oneshot) {
      observable = observable.pipe(last());
    }
    return observable;
  }
}
