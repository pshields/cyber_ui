import {Component, Input} from '@angular/core';

import {Observable, Subscription} from 'rxjs';

import {Task} from '../../interfaces/task';


// A component for showing a list of minimal task cards
@Component({
  selector: 'cyber-ui-minimal-task-card-list',
  templateUrl: './component.html',
  styleUrls: ['./component.scss'],
})
export class CyberUiMinimalTaskCardListComponent<TASK_T extends Task = Task> {
  // A var and setter is used to here to intercept changes made outside of the template.
  // The OnChanges lifecycle event does not occur if the input is changed dynamically
  // in TypeScript rather than through the template. Since setting 'tasks' dynamically
  // is an anticipated use case in Cyber UI, the setter approach is used.
  _tasks: Observable<TASK_T[]>;
  // The tasks to display in the accordion
  @Input() set tasks(tasks: Observable<TASK_T[]>) {
    if (this._tasks) {
      // Stop listening to the old tasks observable
      this.tasksSubscription.unsubscribe();
    }
    this._tasks = tasks;
  }
  tasksSubscription: Subscription;
}
