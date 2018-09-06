import {Injectable} from '@angular/core';
import {Router} from '@angular/router';

import {MatSnackBar} from '@angular/material';

import {ReplaySubject} from 'rxjs';
import {first, map} from 'rxjs/operators';

import {getDemoTaskSuggestions} from '../data';

import {Task} from 'lib/public_api';
import {TaskSuggestionService} from 'lib/public_api';
import {TaskSuggestionServiceGetSuggestionsBaseOptions} from 'lib/public_api';
import {TaskSuggestionServiceGetSuggestionsBaseResponse} from 'lib/public_api';
import {TaskSuggestion} from 'lib/public_api';
import {CyberUiSnoozeReasonCollectionDialogService} from 'lib/public_api';


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
    readonly snoozeReasonCollectionDialogService: CyberUiSnoozeReasonCollectionDialogService
  ) {
    this.suggestions.next(getDemoTaskSuggestions({
        router: this.router,
        snackBar: this.snackBar,
        snoozeReasonCollectionDialogService: this.snoozeReasonCollectionDialogService,
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
