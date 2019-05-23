import {Component} from '@angular/core';

import {CyberUiSavableModel} from '../../../../backends/interfaces/model';


// A default display component implementation for add-thing-workflow
// Developers may elect to supply a substitute display component by providing it via the
// CYBER_UI_ADD_THING_WORKFLOW_DISPLAY_COMPONENT injection token
@Component({
  templateUrl: 'component.html',
})
export class CyberUiAddThingWorkflowDefaultDisplayComponent {
  model: CyberUiSavableModel;
}


// This default display component is also used to obtain a type for use throughout the add-thing-workflow code
// It's assumed that any substitute display component will still conform to this type where relevant
export type CyberUiAddThingWorkflowDisplayComponent = CyberUiAddThingWorkflowDefaultDisplayComponent;