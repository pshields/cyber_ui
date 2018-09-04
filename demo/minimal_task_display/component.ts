import {Component, Inject} from '@angular/core';
import {Router} from '@angular/router';

import {MatSnackBar} from '@angular/material';

import {TASK_SUGGESTION_SERVICE} from 'lib/public_api';
import {Task} from 'lib/public_api';

import {getDemoTasks} from '../data';
import {DemoTaskSuggestionService} from '../task_suggestion_service/service';


@Component({
  templateUrl: './component.html',
})
export class MinimalTaskDisplayDemoComponent {
  tasks: Task[];

  constructor(
    readonly router: Router,
    readonly snackBar: MatSnackBar,
    @Inject(TASK_SUGGESTION_SERVICE) readonly taskSuggestionService: DemoTaskSuggestionService,
  ) {
    this.tasks = getDemoTasks({
      router: router,
      snackBar: snackBar,
      taskSuggestionService: taskSuggestionService,
    });
  }

}
