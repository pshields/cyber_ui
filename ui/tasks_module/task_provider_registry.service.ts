import {Injectable} from '@angular/core';

import {Observable, merge} from 'rxjs';

import {Task} from './interfaces/task';
import {TaskProvider, TaskProviderId, TaskProviderGetTasksOptions, TaskProviderGetTasksResponse} from './interfaces/task_provider';
import {TaskProviderRegistry} from './interfaces/task_provider_registry';


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
// By using a task provider registry, downstream consumers such as task suggestion engines don't need to
// worry about where the tasks come from. They can just work with the tasks that they are given.
@Injectable()
export class TaskProviderRegistryService implements TaskProviderRegistry {
  // The list of task providers registered in the registry
  private providers = new Map<TaskProviderId, TaskProvider>();

  // Registers the given task provider into the registry
  registerProvider(id: TaskProviderId, provider: TaskProvider): void {
    if (this.providers.has(id)) {
      console.error(`Refusing to register provider with duplicated id '${id}'`);
    } else {
      this.providers.set(id, provider);
    }
  }

  // Returns a copy of the list of current providers
  getProviders(): TaskProvider[] {
    return Array.from(this.providers.values());
  }

  // Returns an observable emitting the current list of tasks (live-updating after each task provider returns)
  // To get an observable emitting only the final complete list of tasks, call `.last()` on the returned observable
  getTasks(options: TaskProviderGetTasksOptions): Observable<Task[]> {
    // Maintain a mapping from providers to the latest tasks they've returned
    // Note that a given provider may emit multiple responses over time
    // In that case, we need to replace the old set of tasks with the new
    // As a result, just keeping a flat list of tasks returned so far is insufficient
    // We need to know which provider each task came from in order to do the replacement
    const tasksByProvider = new Map<TaskProviderId, Task[]>();
    const providerResponses: {providerId: TaskProviderId, responseObservable: Observable<TaskProviderGetTasksResponse>}[] = [];
    this.providers.forEach((provider, providerId) => {
      providerResponses.push({
        providerId: providerId,
        responseObservable: provider.getTasks(options)
      });
    });
    let numProviderCompletions = 0;
    return Observable.create(subscriber => {
      merge(
          providerResponses
          .map(providerResponse => {
            return providerResponse.responseObservable.subscribe((response: TaskProviderGetTasksResponse) => {
              // Update the tasks associated with this provider
              // Either they were previously undefined (in the case of the initial provider response),
              // or they were previously defined but have become outdated due to the newer response,
              // which might reflect updates to the provider's data store (new tasks, canceled tasks, etc.)
              tasksByProvider.set(providerResponse.providerId, response.tasks);
              let result: Task[] = [];
              // Collect the full list of tasks from the map
              // It would be nice to use flatMap here, but it's not supported by browsers yet
              tasksByProvider.forEach(tasks => result = result.concat(tasks));
              subscriber.next(result);
            },
            error => console.error(error),
            () => {
              numProviderCompletions += 1;
              // If this is the last provider to complete, mark the subscriber as complete
              // (there won't be any more events after this)
              if (numProviderCompletions === providerResponses.length) {
                subscriber.complete();
              }
            }
          );
        })
      );
    });
  }
}
