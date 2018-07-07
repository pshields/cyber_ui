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
import {CyberUiWorkOnTasksWorkflowModule} from 'ui/workflows/work_on_tasks/module';

import {DemoTaskSuggestionService} from '../task_suggestion_service/service';
import {DemoWorkflowSettingsService} from '../workflow_settings_service/service';
import {FormFieldsDemoComponent} from '../form_fields/component';
import {FormFieldsDemoModule} from '../form_fields/module';
import {InterfacesDocumentationComponent} from '../interfaces/component';
import {InterfacesDocumentationModule} from '../interfaces/module';
import {MinimalTaskCardDemoComponent} from '../minimal_task_card/component';
import {MinimalTaskCardDemoModule} from '../minimal_task_card/module';
import {MinimalTaskDisplayDemoModule} from '../minimal_task_display/module';
import {MinimalTaskDisplayDemoComponent} from '../minimal_task_display/component';

import {WorkOnTasksWorkflowDemoComponent} from '../work_on_tasks_workflow/component';
import {WorkOnTasksWorkflowDemoModule} from '../work_on_tasks_workflow/module';

import {AppComponent} from './component';
import {ComponentListComponent} from './component_list.component';


export const routes: Routes = [
  {path: 'interfaces/:id', component: InterfacesDocumentationComponent},
  {path: 'components/minimal-task-card', component: MinimalTaskCardDemoComponent},
  {path: 'components/minimal-task-display', component: MinimalTaskDisplayDemoComponent},
  {path: 'components/form-fields', component: FormFieldsDemoComponent},
  {path: 'workflows/work-on-tasks', component: WorkOnTasksWorkflowDemoComponent},
  {path: '', pathMatch: 'full', redirectTo: 'interfaces/task'},
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
    InterfacesDocumentationModule,
    MinimalTaskCardDemoModule,
    MinimalTaskDisplayDemoModule,
    WorkOnTasksWorkflowDemoModule,
    // Cyber UI modules that don't have a corresponding demo module
    CyberUiWorkOnTasksWorkflowModule,
  ],
  providers: [
    {provide: TASK_SUGGESTION_SERVICE, useClass: DemoTaskSuggestionService},
    {provide: WORKFLOW_SETTINGS_SERVICE, useClass: DemoWorkflowSettingsService},
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
