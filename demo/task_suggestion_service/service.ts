import {Injectable} from '@angular/core';
import {Router} from '@angular/router';

import {MatSnackBar} from '@angular/material';

import {ReplaySubject} from 'rxjs';
import {first, map} from 'rxjs/operators';

import {getDemoTaskSuggestions} from '../data';

import {Task} from 'lib/task/interfaces/task';
import {TaskSuggestionService} from 'lib/task/interfaces/task_suggestion_service';
import {TaskSuggestionServiceGetSuggestionsBaseOptions} from 'lib/task/interfaces/task_suggestion_service';
import {TaskSuggestionServiceGetSuggestionsBaseResponse} from 'lib/task/interfaces/task_suggestion_service';
import {TaskSuggestion} from 'lib/public_api';


// A TaskSuggestionService for use on the demo site
@Injectable()
export class DemoTaskSuggestionService implements TaskSuggestionService<
    Task,
    TaskSuggestionServiceGetSuggestionsBaseOptions,
    TaskSuggestionServiceGetSuggestionsBaseResponse<Task>
  > {
  suggestions = new ReplaySubject<TaskSuggestion<Task>[]>(1);

  constructor(
    readonly router: Router,
    readonly snackBar: MatSnackBar,
  ) {
    this.suggestions.next(getDemoTaskSuggestions({
        router: this.router,
        snackBar: this.snackBar,
        taskSuggestionService: this,
    }));
  }

  markTaskComplete(task: Task) {
    this.suggestions.pipe(first()).subscribe(suggestions => {
      this.suggestions.next(suggestions.filter(suggestion => {
        return suggestion.task !== task;
      }));
    });
  }

  setActionsDisplayComponent(componentCls: string|any) {
    if (componentCls === '') {
      componentCls = undefined;
    }
    this.suggestions.pipe(first()).subscribe(suggestions => {
      this.suggestions.next(suggestions.map(suggestion => {
        suggestion.task.actionsDisplayComponent = componentCls;
        return suggestion;
      }));
    });
  }

  getSuggestions(options: TaskSuggestionServiceGetSuggestionsBaseOptions) {
    return this.suggestions.pipe(map(tasks => {
      return {suggestions: tasks};
    }));
  }
}
