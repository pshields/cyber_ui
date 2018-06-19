import {Component, ComponentFactory, ComponentFactoryResolver, Input, ViewChild, ViewContainerRef, OnChanges, SimpleChanges} from '@angular/core';
import {MatExpansionPanel} from '@angular/material';

import {Task} from '../../interfaces/task';
import {TaskBodyComponent} from '../../interfaces/task_body_component';


// A relatively minimal display component for a Task as a Material expansion panel
@Component({
  selector: 'cyber-ui-minimal-task-expansion-panel',
  templateUrl: './component.html',
})
export class CyberUiMinimalTaskExpansionPanelComponent<TASK_T extends Task> implements OnChanges {
  // A reference to the underlying Material expansion panel
  // This is useful e.g. to be able to open the panel from a parent component
  @ViewChild(MatExpansionPanel) panel: MatExpansionPanel;
  // A reference to the view container where a custom body component can be rendered
  @ViewChild('body', {read: ViewContainerRef}) bodyViewContainer: ViewContainerRef;
  // The task to display in the expansion panel
  @Input() task: TASK_T;

  constructor(
    private resolver: ComponentFactoryResolver,
  ) {}

  ngOnChanges(changes: SimpleChanges) {
    if (changes.task) {
      // If the task has changed, update the body component in the view container
      this.updateBodyComponent();
    }
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
  }
}
