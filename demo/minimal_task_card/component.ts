import {Component, Inject} from '@angular/core';
import {Router} from '@angular/router';

import {MatSnackBar} from '@angular/material';

import {CyberUiSnoozeReasonCollectionDialogService} from 'lib/public_api';
import {TASK_SUGGESTION_SERVICE} from 'lib/public_api';
import {Task} from 'lib/public_api';

import {getDemoTasks} from '../data';
import {DemoTaskSuggestionService} from '../task_suggestion_service/service';


@Component({
  templateUrl: './component.html',
  styleUrls: ['./component.scss'],
})
export class MinimalTaskCardDemoComponent {
  tasks: Task[];

  constructor(
    readonly router: Router,
    readonly snackBar: MatSnackBar,
    readonly snoozeReasonCollectionDialogService: CyberUiSnoozeReasonCollectionDialogService,
    @Inject(TASK_SUGGESTION_SERVICE) readonly taskSuggestionService: DemoTaskSuggestionService
  ) {
    this.tasks = getDemoTasks({
      router,
      snackBar,
      snoozeReasonCollectionDialogService,
      taskSuggestionService,
    });
  }
}
