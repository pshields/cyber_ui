import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {CyberUiFormFieldsModule} from 'lib/form/form_fields/module';
import {CyberUiTaskAccordionModule} from 'lib/task/displays/accordion/module';
import {CyberUiWorkOnTasksWorkflowModule} from 'lib/workflows/work_on_tasks/module';

import {WorkOnTasksWorkflowDemoComponent} from './component';


@NgModule({
  imports: [
    CommonModule,
    CyberUiFormFieldsModule,
    CyberUiTaskAccordionModule,
    CyberUiWorkOnTasksWorkflowModule,
  ],
  declarations: [
    WorkOnTasksWorkflowDemoComponent,
  ],
})
export class WorkOnTasksWorkflowDemoModule {}
