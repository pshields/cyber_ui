import {NgModule} from '@angular/core';

import {CyberUiAddThingWorkflowComponent} from './component';
import {CyberUiAddThingWorkflowDefaultDisplayModule} from './displays/default/module';


@NgModule({
  imports: [
    CyberUiAddThingWorkflowDefaultDisplayModule,
  ],
  declarations: [
    CyberUiAddThingWorkflowComponent,
  ],
  exports: [
    CyberUiAddThingWorkflowComponent,
  ],
})
export class CyberUiAddThingWorkflowModule {}
