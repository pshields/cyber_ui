import {Component, ComponentFactoryResolver} from '@angular/core';
import {Router} from '@angular/router';

import {MatSnackBar} from '@angular/material';

import {Task} from 'lib/task/interfaces/task';

import {getDemoTasks} from '../data';


@Component({
  templateUrl: './component.html',
})
export class MinimalTaskDisplayDemoComponent {
  tasks: Task[];

  constructor(
    readonly componentFactoryResolver: ComponentFactoryResolver,
    readonly router: Router,
    readonly snackBar: MatSnackBar
  ) {
    this.tasks = getDemoTasks({
      componentFactoryResolver: componentFactoryResolver,
      router: router,
      snackBar: snackBar,
    });
  }

}
