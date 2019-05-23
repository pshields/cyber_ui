import {Component} from '@angular/core';

import {CyberUiSavableModel} from '../../../../backends/interfaces/model';


// This component only exists for typing purposes. It's essentially an interface.
@Component({
  templateUrl: 'component.html',
})
export class CyberUiAddThingWorkflowDefaultDisplayComponent {
  model: CyberUiSavableModel;
}


// This default display component is also used to obtain a type for use throughout the add-thing-workflow code
// It's assumed that any substitute display component will still conform to this type where relevant
export type CyberUiAddThingWorkflowDisplayComponent = CyberUiAddThingWorkflowDefaultDisplayComponent;