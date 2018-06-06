import {Component} from '@angular/core';
import {Router} from '@angular/router';

import {MatSnackBar} from '@angular/material';

import {Task} from 'ui/tasks_module/interfaces/task';

import {getDemoTasks} from '../data';


@Component({
  templateUrl: './component.html',
})
export class MinimalTaskCardDemoComponent {
  tasks: Task[];

  constructor(
    readonly router: Router,
    readonly snackBar: MatSnackBar
  ) {
    this.tasks = getDemoTasks({
      router: router,
      snackBar: snackBar,
    });
  }
}
