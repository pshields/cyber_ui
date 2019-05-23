import {NgModule} from '@angular/core';

import {CyberUiFormFieldsModule} from '../../../../form/form_fields/module';

import {CyberUiAddThingWorkflowDefaultDisplayComponent} from './component';


@NgModule({
  imports: [
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
