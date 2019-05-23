import {Component, InjectionToken} from '@angular/core';

import {CyberUiSavableModel} from '../../backends/interfaces/model';


// This component only exists for typing purposes. It's essentially an interface.
@Component({
  template: '',
})
export class CyberUiAddThingWorkflowDisplayComponent {
  model: CyberUiSavableModel;
}


export const CYBER_UI_ADD_THING_WORKFLOW_DISPLAY_COMPONENT = new InjectionToken<CyberUiAddThingWorkflowDisplayComponent>('CyberUiAddThingWorkflowDisplayComponent');