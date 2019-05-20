import {Component, Inject} from '@angular/core';

import {CYBER_UI_ADD_THING_WORKFLOW_DISPLAY_COMPONENT} from './display_component_injection_token';


@Component({
  selector: 'cyber-ui-add-thing-workflow',
  template: '',
})
export class CyberUiAddThingWorkflowComponent {
  constructor(
    // Common display component choices might include:
    // * cyber-ui-minimal-task-card
    // * cyber-ui-form-fields
    @Inject(CYBER_UI_ADD_THING_WORKFLOW_DISPLAY_COMPONENT) readonly displayComponent: Component,
  ) {
    // TODO Instantiate the provided display component
    // TODO Implement save and exit logic
  }
}
