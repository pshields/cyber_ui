import {NgModule} from '@angular/core';

import {MatButtonModule} from '@angular/material';

import {CyberUiFormFieldsModule} from '../../../../form/form_fields/module';

import {CyberUiAddThingWorkflowDefaultDisplayComponent, CyberUiAddThingWorkflowDisplayComponent} from './component';


@NgModule({
  imports: [
    MatButtonModule,
    CyberUiFormFieldsModule,
  ],
  declarations: [
    // The first one exists only to provide a type, and should probably be moved elsewhere
    CyberUiAddThingWorkflowDisplayComponent,
    CyberUiAddThingWorkflowDefaultDisplayComponent,
  ],
  exports: [
    CyberUiAddThingWorkflowDefaultDisplayComponent,
  ],
  entryComponents: [
    CyberUiAddThingWorkflowDefaultDisplayComponent,
  ],
})
export class CyberUiAddThingWorkflowDefaultDisplayModule {}
