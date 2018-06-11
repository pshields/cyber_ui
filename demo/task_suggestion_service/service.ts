import {Injectable} from '@angular/core';
import {Router} from '@angular/router';

import {MatSnackBar} from '@angular/material';

import {of} from 'rxjs';

import {getDemoTaskSuggestions} from '../data';

import {Task} from 'ui/tasks_module/interfaces/task';
import {TaskSuggestionService} from 'ui/tasks_module/interfaces/task_suggestion_service';
import {TaskSuggestionServiceGetSuggestionsBaseOptions} from 'ui/tasks_module/interfaces/task_suggestion_service';
import {TaskSuggestionServiceGetSuggestionsBaseResponse} from 'ui/tasks_module/interfaces/task_suggestion_service';


// A TaskSuggestionService for use on the demo site
@Injectable()
export class DemoTaskSuggestionService implements TaskSuggestionService<
    Task,
    TaskSuggestionServiceGetSuggestionsBaseOptions,
    TaskSuggestionServiceGetSuggestionsBaseResponse<Task>
  > {
  constructor(
    readonly router: Router,
    readonly snackBar: MatSnackBar,
  ) {

  }
  getSuggestions(options: TaskSuggestionServiceGetSuggestionsBaseOptions) {
    return of({
      suggestions: getDemoTaskSuggestions({router: this.router, snackBar: this.snackBar})
    });
  }
}
