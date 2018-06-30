import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {CyberUiFormFieldsModule} from 'ui/forms_module/form_fields/module';
import {CyberUiTaskAccordionModule} from 'ui/tasks_module/displays/accordion/module';
import {CyberUiWorkOnTasksWorkflowModule} from 'ui/workflows/work_on_tasks/module';

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
