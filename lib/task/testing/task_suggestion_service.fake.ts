import {Injectable} from '@angular/core';

import {ReplaySubject} from 'rxjs';

import {Task} from '../interfaces/task';
import {TaskSuggestionService} from '../interfaces/task_suggestion_service';
import {TaskSuggestionServiceGetSuggestionsBaseOptions} from '../interfaces/task_suggestion_service';
import {TaskSuggestionServiceGetSuggestionsBaseResponse} from '../interfaces/task_suggestion_service';


// A fake TaskSuggestionService to use during tests
@Injectable()
export class FakeTaskSuggestionService implements TaskSuggestionService<
    Task,
    TaskSuggestionServiceGetSuggestionsBaseOptions,
    TaskSuggestionServiceGetSuggestionsBaseResponse<Task>
> {
  suggestions = new ReplaySubject<TaskSuggestionServiceGetSuggestionsBaseResponse<Task>>(1);

  getSuggestions(options: TaskSuggestionServiceGetSuggestionsBaseOptions) {
    return this.suggestions;
  }

  emitSuggestions() {
    this.suggestions.next({
      suggestions: [
        {
          task: {
            label: 'Task A',
            actions: [
              {
                label: 'Action 1',
                handler: () => {}
              }
            ]
          },
          providerId: 'TASK_A_PROVIDER',
        },
        {
          task: {
            label: 'Task B',
            actions: [
              {
                label: 'Action 1',
                handler: () => {}
              }
            ]
          },
          providerId: 'TASK_B_PROVIDER',
        }
      ]
    });
  }
}
