import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';

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
    MatButtonModule,
    MatIconModule,
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
