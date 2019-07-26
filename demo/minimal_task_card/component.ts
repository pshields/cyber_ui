import {Component} from '@angular/core';
import {Router} from '@angular/router';

import {MatSnackBar} from '@angular/material/snack-bar';

import {CyberUiSnoozeReasonCollectionDialogService} from 'lib/public_api';
import {Task} from 'lib/public_api';

import {getDemoTasks} from '../data';
import {DemoTaskProvider} from '../task_suggestion_service/demo_task_provider';


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
    readonly demoTaskProvider: DemoTaskProvider
  ) {
    this.tasks = getDemoTasks({
      router,
      snackBar,
      snoozeReasonCollectionDialogService,
      demoTaskProvider,
    });
  }
}
