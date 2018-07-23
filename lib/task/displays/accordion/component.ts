import {Component, Input, QueryList, ViewChildren} from '@angular/core';

import {Observable, Subscription} from 'rxjs';

import {Task} from '../../interfaces/task';

import {CyberUiMinimalTaskExpansionPanelComponent} from '../minimal_expansion_panel/component';


// A relatively minimal display component for a set of tasks as a Material accordion
@Component({
  selector: 'cyber-ui-task-accordion',
  templateUrl: './component.html',
  styleUrls: ['./component.scss'],
})
export class CyberUiTaskAccordionComponent<TASK_T extends Task> {
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
    // Subscribe to the new tasks observable
    this.tasksSubscription = tasks.subscribe(_ => {
      // Draw attention to the new top suggestion
      // Needs to be done asynchronously to wait for the view to be updated
      // TODO Allow consumers to disable this functionality via a workflow setting
      setTimeout(() => this.openFirstExpansionPanelIfExists(), 0);
    });
  }

  // The current list of suggestion panels in the view
  @ViewChildren(CyberUiMinimalTaskExpansionPanelComponent) suggestionPanels: QueryList<CyberUiMinimalTaskExpansionPanelComponent<TASK_T>>;

  tasksSubscription: Subscription;

  // Opens the first expansion panel in the accordion, if it exists
  // The idea is to draw attention to the top suggestion whenever the suggestions change
  openFirstExpansionPanelIfExists() {
    if (this.suggestionPanels !== undefined && this.suggestionPanels.length > 0) {
      this.suggestionPanels.first.panel.open();
    }
  }
}
