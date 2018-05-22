import {Injectable} from '@angular/core';

import {Observable, merge} from 'rxjs';

import {Task} from '../interfaces/task';
import {TaskEngineSettings} from '../interfaces/task_engine_settings';
import {TaskProvider} from '../interfaces/task_provider';


// A highly experimental register for collecting tasks from multiple providers
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
export class TaskProviderRegistry {
  // The list of task providers registered in the registry
  private providers: TaskProvider[] = [];

  // Registers the given task provider into the registry
  registerProvider(provider: TaskProvider): void {
    this.providers.push(provider);
  }

  // Returns a copy of the list of current providers
  getProviders(): TaskProvider[] {
    return this.providers.slice();
  }

  // Returns an observable emitting the current list of tasks (live-updating after each task provider returns)
  // To get an observable emitting only the final complete list of tasks, call `.last()` on the returned observable
  getTasks(settings: TaskEngineSettings): Observable<Task[]> {
    const tasks: Task[] = [];
    return Observable.create(subscriber => {
      merge(...this.providers.map(provider => provider.getTasks(settings)))
        .subscribe((tasksFromProvider: Task[]) => {
          tasks.push(...tasksFromProvider);
          // Emit the list of tasks accrued so far. This occurs every time a task provider returns.
          // By the time the final task provider returns, `tasks` will be the complete list of tasks.
          subscriber.next(tasks);
        },
        error => console.error(error),
        () => subscriber.complete()
      );
    });
  }
}
