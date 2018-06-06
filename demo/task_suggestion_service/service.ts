import {Injectable} from '@angular/core';
import {Router} from '@angular/router';

import {MatSnackBar} from '@angular/material';

import {of} from 'rxjs';

import {TaskSuggestionEngine} from 'ui/tasks_module/interfaces/task_suggestion_engine';
import {getDemoTasks} from '../data';


// A TaskSuggestionService for use on the demo site
@Injectable()
export class DemoTaskSuggestionService implements TaskSuggestionEngine {
  constructor(
    readonly router: Router,
    readonly snackBar: MatSnackBar,
  ) {

  }
  getSuggestions() {
    return of(getDemoTasks({router: this.router, snackBar: this.snackBar}));
  }
}
