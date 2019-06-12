import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {CyberUiFormFieldsModule} from 'lib/public_api';
import {CyberUiResponseChipsModule} from 'lib/public_api';
import {CyberUiTaskAccordionModule} from 'lib/public_api';
import {CyberUiMinimalTaskCardListModule} from 'lib/public_api';
import {CyberUiMinimalTaskListModule} from 'lib/public_api';
import {CyberUiActionsPanelModule} from 'lib/public_api';
import {CyberUiWorkOnTasksWorkflowModule} from 'lib/public_api';

import {WorkOnTasksWorkflowDemoComponent} from './component';


@NgModule({
  imports: [
    CommonModule,
    CyberUiFormFieldsModule,
    CyberUiTaskAccordionModule,
    CyberUiMinimalTaskCardListModule,
    CyberUiMinimalTaskListModule,
    CyberUiActionsPanelModule,
    CyberUiResponseChipsModule,
    CyberUiWorkOnTasksWorkflowModule,
  ],
  declarations: [
    WorkOnTasksWorkflowDemoComponent,
  ],
})
export class WorkOnTasksWorkflowDemoModule {}
