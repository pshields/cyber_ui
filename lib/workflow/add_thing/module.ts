import {NgModule} from '@angular/core';

import {CyberUiAddThingWorkflowComponent} from './component';
import {CyberUiAddThingWorkflowDisplayComponent} from './display_component';


@NgModule({
  declarations: [
    CyberUiAddThingWorkflowComponent,
    CyberUiAddThingWorkflowDisplayComponent,  // Only added to avoid "Cannot determine the module for class" error - not used in production
  ],
  exports: [
    CyberUiAddThingWorkflowComponent,
  ],
})
export class CyberUiAddThingWorkflowModule {}
