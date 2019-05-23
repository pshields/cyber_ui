import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {CYBER_UI_ADD_THING_WORKFLOW_DISPLAY_COMPONENT} from 'lib/public_api';
import {CyberUiAddThingWorkflowModule} from 'lib/public_api';
import {CyberUiAddThingWorkflowDefaultDisplayModule} from 'lib/public_api';

import {AddThingWorkflowDemoComponent} from './component';
import {CyberUiAddThingWorkflowDefaultDisplayComponent} from 'lib/workflow/add_thing/displays/default/component';



@NgModule({
  imports: [
    CommonModule,
    CyberUiAddThingWorkflowModule,
    CyberUiAddThingWorkflowDefaultDisplayModule,
  ],
  declarations: [
    AddThingWorkflowDemoComponent,
  ],
  providers: [
    {provide: CYBER_UI_ADD_THING_WORKFLOW_DISPLAY_COMPONENT, useValue: CyberUiAddThingWorkflowDefaultDisplayComponent},
  ]
})
export class AddThingWorkflowDemoModule {}
