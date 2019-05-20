import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {CyberUiFormFieldsModule, CYBER_UI_ADD_THING_WORKFLOW_DISPLAY_COMPONENT, CyberUiFormFieldsComponent} from 'lib/public_api';
import {CyberUiAddThingWorkflowModule} from 'lib/public_api';

import {AddThingWorkflowDemoComponent} from './component';


@NgModule({
  imports: [
    CommonModule,
    CyberUiFormFieldsModule,
    CyberUiAddThingWorkflowModule,
  ],
  declarations: [
    AddThingWorkflowDemoComponent,
  ],
  providers: [
    {provide: CYBER_UI_ADD_THING_WORKFLOW_DISPLAY_COMPONENT, useValue: CyberUiFormFieldsComponent},
  ]
})
export class AddThingWorkflowDemoModule {}
