import {Component, ComponentFactory, ComponentFactoryResolver, Input, SimpleChanges, ViewChild, ViewContainerRef} from '@angular/core';


import {Task} from '../../interfaces/task';
import {TaskBodyComponent} from '../../interfaces/task_body_component';


// A relatively minimal display component for a task
// TODO The logic in this component is almost identical to that of minimal-expansion-panel and minimal-task-card; figure out a way to reduce the redundancy
@Component({
  selector: 'cyber-ui-minimal-task',
  templateUrl: './component.html',
  styleUrls: ['./component.scss'],
})
export class CyberUiMinimalTaskComponent<TASK_T extends Task> {
  // A reference to the view container where a custom body component can be rendered
  @ViewChild('body', {read: ViewContainerRef, static: true}) bodyViewContainer: ViewContainerRef;
  // A reference to the view container where a custom actions display component can be rendered
  @ViewChild('actions', {read: ViewContainerRef, static: true}) actionsViewContainer: ViewContainerRef;
  // The task to display
  @Input() task: TASK_T;
  // The current body component (tracked for purposes of change detection)
  bodyComponent: TaskBodyComponent<TASK_T>;
  // The current actions display component (tracked for purposes of change detection)
  actionsDisplayComponent: any;

  constructor(
    private readonly resolver: ComponentFactoryResolver,
  ) {}

  ngOnChanges(changes: SimpleChanges) {
    if (changes.task) {
      // If the task has changed, update the body component in the view container
      this.updateBodyComponent();
      this.updateActionsDisplayComponent();
    }
  }

  // There are some times we need to do work even if the task reference hasn't changed
  // e.g. if certain task properties have been mutated, we need to do some updates here
  ngDoCheck() {
    if (this.actionsDisplayComponent !== this.task.actionsDisplayComponent) {
      this.updateActionsDisplayComponent();
    } else if (this.bodyComponent !== this.task.bodyComponent) {
      this.updateBodyComponent();
    }
  }

  updateActionsDisplayComponent() {
    // Clear the existing actions display component, if one exists
    if (this.actionsViewContainer) {
      this.actionsViewContainer.clear();
    }
    if (this.task.actionsDisplayComponent) {
      const factory: ComponentFactory<any> = this.resolver.resolveComponentFactory(this.task.actionsDisplayComponent);
      const componentRef = this.actionsViewContainer.createComponent(factory) ;
      // Set the 'task' input on the component to the current task
      componentRef.instance.actions = this.task.actions;
    }
    this.actionsDisplayComponent = this.task.actionsDisplayComponent;
  }

  updateBodyComponent() {
     // Clear the existing body component, if one exists
     this.bodyViewContainer.clear();
     // Insert a new body component, if one is given
     if (this.task.bodyComponent) {
       const factory: ComponentFactory<TaskBodyComponent<TASK_T>> = this.resolver.resolveComponentFactory(this.task.bodyComponent);
       const componentRef = this.bodyViewContainer.createComponent(factory) ;
       // Set the 'task' input on the component to the current task
       componentRef.instance.task = this.task;
     }
     // Save a reference to the current body component class
     this.bodyComponent = this.task.bodyComponent;
  }
}
