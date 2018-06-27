import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {MatButtonModule} from '@angular/material';
import {MatIconModule} from '@angular/material';
import {MatListModule} from '@angular/material';
import {MatSidenavModule} from '@angular/material';
import {MatToolbarModule} from '@angular/material';

import {TASK_SUGGESTION_SERVICE} from 'ui/tasks_module/injection_tokens/task_suggestion_service';
import {WORKFLOW_SETTINGS_SERVICE} from 'ui/workflows/injection_tokens/workflow_settings_service';
import {CyberUiWorkOnTasksAccordionWorkflowComponent} from 'ui/workflows/work_on_tasks/accordion/component';
import {CyberUiWorkOnTasksAccordionWorkflowModule} from 'ui/workflows/work_on_tasks/accordion/module';

import {FormFieldsDemoComponent} from '../form_fields/component';
import {FormFieldsDemoModule} from '../form_fields/module';
import {MinimalTaskCardDemoComponent} from '../minimal_task_card/component';
import {MinimalTaskCardDemoModule} from '../minimal_task_card/module';
import {MinimalTaskDisplayDemoModule} from '../minimal_task_display/module';
import {MinimalTaskDisplayDemoComponent} from '../minimal_task_display/component';
import {DemoTaskSuggestionService} from '../task_suggestion_service/service';

import {AppComponent} from './component';
import {ComponentListComponent} from './component_list.component';
import {DemoWorkflowSettingsService} from '../workflow_settings_service/service';


export const routes: Routes = [
  {path: 'components/minimal-task-card', component: MinimalTaskCardDemoComponent},
  {path: 'components/minimal-task-display', component: MinimalTaskDisplayDemoComponent},
  {path: 'components/form-fields', component: FormFieldsDemoComponent},
  {path: 'workflows/work-on-tasks-accordion', component: CyberUiWorkOnTasksAccordionWorkflowComponent},
  {path: '', component: ComponentListComponent},
];


@NgModule({
  declarations: [
    AppComponent,
    ComponentListComponent,
  ],
  imports: [
    // Angular core modules
    BrowserModule,
    BrowserAnimationsModule,
    // Angular Material modules used only in the demo app
    MatButtonModule,
    MatIconModule,
    MatListModule,
    MatSidenavModule,
    MatToolbarModule,
    // Routing
    RouterModule.forRoot(routes),
    // Demo modules
    FormFieldsDemoModule,
    MinimalTaskCardDemoModule,
    MinimalTaskDisplayDemoModule,
    // Cyber UI modules that don't have a corresponding demo module
    CyberUiWorkOnTasksAccordionWorkflowModule,
  ],
  providers: [
    {provide: TASK_SUGGESTION_SERVICE, useClass: DemoTaskSuggestionService},
    {provide: WORKFLOW_SETTINGS_SERVICE, useClass: DemoWorkflowSettingsService},
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
