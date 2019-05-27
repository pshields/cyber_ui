import {Component, ViewChild} from '@angular/core';

import {CyberUiFormFieldsComponent} from 'lib/public_api';
import {CyberUiAddThingWorkflowComponent} from 'lib/public_api';
import {CyberUiAddThingWorkflowExitEvent} from 'lib/public_api';


@Component({
  selector: 'add-thing-workflow-demo',
  templateUrl: 'component.html',
})
export class AddThingWorkflowDemoComponent {
  // The display component to use to display tasks
  // TODO Eventually demonstrate swapping this dynamically using a choicefield
  displayComponent = CyberUiFormFieldsComponent;

  @ViewChild(CyberUiAddThingWorkflowComponent) workflowComponent: CyberUiAddThingWorkflowComponent;

  ngAfterViewInit() {
    this.workflowComponent.exits.subscribe((e: CyberUiAddThingWorkflowExitEvent) => {
      if (e.model) {
        // TODO Activate the snack bar mentioning the saved model
      } else {
        // TODO Activate the snack bar mentioning that the existing model was discarded
      }
      // Reset the workflow component with a new model
      this.workflowComponent.clearModel();
    });
  }
}
