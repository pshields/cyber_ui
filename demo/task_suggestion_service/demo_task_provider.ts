import {Injectable} from '@angular/core';
import {Router} from '@angular/router';

import {MatSnackBar} from '@angular/material/snack-bar';

import {ReplaySubject} from 'rxjs';
import {first, map} from 'rxjs/operators';

import {CyberUiSnoozeReasonCollectionDialogService} from 'lib/public_api';
import {Task} from 'lib/public_api';
import {TaskProvider} from 'lib/public_api';
import {TaskProviderGetTasksOptions} from 'lib/public_api';

import {getDemoTasks} from '../data';


export const DEMO_TASK_PROVIDER_ID = 'DEMO_TASK_PROVIDER';
export const DEMO_TASK_PROVIDER_LABEL = 'Demo tasks';


@Injectable()
export class DemoTaskProvider implements TaskProvider<Task> {
  demoTasks = new ReplaySubject<Task[]>(1);

  markTaskComplete(completedTask: Task) {
    this.demoTasks.pipe(first()).subscribe(tasks => {
      this.demoTasks.next(tasks.filter(task => task !== completedTask));
    });
  }

  setActionsDisplayComponent(componentCls: string|any) {
    if (componentCls === '') {
      componentCls = undefined;
    }
    this.demoTasks.pipe(first()).subscribe(tasks => {
      this.demoTasks.next(tasks.map(task => {
        task.actionsDisplayComponent = componentCls;
        return task;
      }));
    });
  }

  getTasks(options: TaskProviderGetTasksOptions) {
    return this.demoTasks.pipe(map(tasks => {
      return {tasks: tasks};
    }));
  }

  constructor(
    readonly router: Router,
    readonly snackBar: MatSnackBar,
    readonly snoozeReasonCollectionDialogService: CyberUiSnoozeReasonCollectionDialogService,
  ) {
    this.demoTasks.next(getDemoTasks({
      router: this.router,
      snackBar: this.snackBar,
      snoozeReasonCollectionDialogService: this.snoozeReasonCollectionDialogService,
      demoTaskProvider: this,
  }));
  }
}
