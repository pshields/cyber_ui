import {Component, ViewChild} from '@angular/core';

import {MatSnackBar} from '@angular/material';

import {CyberUiFormFieldsComponent} from 'lib/public_api';
import {CyberUiAddThingWorkflowService} from 'lib/public_api';
import {CyberUiAddThingWorkflowComponent} from 'lib/public_api';
import {CyberUiAddThingWorkflowExitEvent} from 'lib/public_api';


// TODO Use a demo-wide snackbar config instead of defining something here
const snackbarConfig = {duration: 3000};


@Component({
  selector: 'add-thing-workflow-demo',
  templateUrl: 'component.html',
})
export class AddThingWorkflowDemoComponent {
  // The display component to use to display tasks
  // TODO Eventually demonstrate swapping this dynamically using a choicefield
  displayComponent = CyberUiFormFieldsComponent;

  @ViewChild(CyberUiAddThingWorkflowComponent, {static: true}) workflowComponent: CyberUiAddThingWorkflowComponent;

  constructor(
    readonly snackbar: MatSnackBar,
    readonly workflowService: CyberUiAddThingWorkflowService,
  ) {}

  ngAfterViewInit() {
    this.workflowService.exits.subscribe((e: CyberUiAddThingWorkflowExitEvent) => {
      if (e.model) {
        this.snackbar.open('add-thing-workflow saved model: ' + JSON.stringify(e.model), undefined, snackbarConfig);
        console.info('add-thing-workflow saved model', e.model);
      } else {
        this.snackbar.open('add-thing-workflow exited without saving', undefined, snackbarConfig);
        console.info('add-thing-workflow exited without saving');
      }
      // Reset the workflow component with a new model
      this.workflowComponent.clearModel();
    });
  }
}
