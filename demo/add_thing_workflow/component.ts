import {Component} from '@angular/core';

import {CyberUiFormFieldsComponent} from 'lib/public_api';


@Component({
  selector: 'add-thing-workflow-demo',
  templateUrl: 'component.html',
})
export class AddThingWorkflowDemoComponent {
  // The display component to use to display tasks
  // TODO Eventually demonstrate swapping this dynamically using a choicefield
  displayComponent = CyberUiFormFieldsComponent;
}
