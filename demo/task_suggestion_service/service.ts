import {Injectable} from '@angular/core';

import {map} from 'rxjs/operators';

import {Task} from 'lib/public_api';
import {TaskProviderRegistryService} from 'lib/public_api';
import {TaskSuggestionService} from 'lib/public_api';
import {TaskSuggestionServiceGetSuggestionsBaseOptions} from 'lib/public_api';
import {TaskSuggestionServiceGetSuggestionsBaseResponse} from 'lib/public_api';

import {DEMO_TASK_PROVIDER_ID, DemoTaskProvider} from './demo_task_provider';


// A TaskSuggestionService for use on the demo site
@Injectable()
export class DemoTaskSuggestionService implements TaskSuggestionService<
    Task,
    TaskSuggestionServiceGetSuggestionsBaseOptions,
    TaskSuggestionServiceGetSuggestionsBaseResponse<Task>
  > {

  constructor(
    readonly demoTaskProvider: DemoTaskProvider,
    readonly taskProviderRegistry: TaskProviderRegistryService
  ) {
    taskProviderRegistry.registerProvider(DEMO_TASK_PROVIDER_ID, demoTaskProvider);
  }

  getSuggestions(options: TaskSuggestionServiceGetSuggestionsBaseOptions) {
    return this.taskProviderRegistry.getTasks(options).pipe(map(tasks => {
      return {suggestions: tasks.tasks.map(task => { return {task: task}})};
    }));
  }
}
