import {NgModule} from '@angular/core';

import {MatButtonModule} from '@angular/material';

import {CyberUiFormFieldsModule} from '../../../../form/form_fields/module';

import {CyberUiAddThingWorkflowDefaultDisplayComponent} from './component';


@NgModule({
  imports: [
    MatButtonModule,
    CyberUiFormFieldsModule,
  ],
  declarations: [
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
