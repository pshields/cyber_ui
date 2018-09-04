import {Component, ComponentFactory, ComponentFactoryResolver, Input, ViewChild, ViewContainerRef, OnChanges, SimpleChanges, DoCheck} from '@angular/core';
import {MatExpansionPanel} from '@angular/material';

import {Task} from '../../interfaces/task';
import {TaskBodyComponent} from '../../interfaces/task_body_component';


// A relatively minimal display component for a Task as a Material expansion panel
@Component({
  selector: 'cyber-ui-minimal-task-expansion-panel',
  templateUrl: './component.html',
  styleUrls: ['./component.scss'],
})
export class CyberUiMinimalTaskExpansionPanelComponent<TASK_T extends Task> implements DoCheck, OnChanges {
  // A reference to the underlying Material expansion panel
  // This is useful e.g. to be able to open the panel from a parent component
  @ViewChild(MatExpansionPanel) panel: MatExpansionPanel;
  // A reference to the view container where a custom body component can be rendered
  @ViewChild('body', {read: ViewContainerRef}) bodyViewContainer: ViewContainerRef;
  // A reference to the view container where a custom actions display component can be rendered
  @ViewChild('actions', {read: ViewContainerRef}) actionsViewContainer: ViewContainerRef;
  // The task to display in the expansion panel
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
