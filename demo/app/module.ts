import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {MatButtonModule} from '@angular/material';
import {MatIconModule} from '@angular/material';
import {MatListModule} from '@angular/material';
import {MatSidenavModule} from '@angular/material';
import {MatToolbarModule} from '@angular/material';
import {MAT_DIALOG_DEFAULT_OPTIONS} from '@angular/material';

import {MarkdownModule} from 'ngx-markdown';

import {TASK_SUGGESTION_SERVICE, CYBER_UI_MAT_DIALOG_DEFAULT_CONFIG} from 'lib/public_api';
import {WORKFLOW_SETTINGS_SERVICE} from 'lib/public_api';
import {CyberUiSettingsDialogModule} from 'lib/public_api';
import {CyberUiSnoozeReasonCollectionDialogModule} from 'lib/public_api';
import {CyberUiWorkOnTasksWorkflowModule} from 'lib/public_api';
import {CyberUiDelegationMenuModule} from 'lib/public_api';

import {CapabilityAreasComponent} from '../capability_areas/component';
import {CapabilityAreasModule} from 'demo/capability_areas/module';
import {DemoTaskSuggestionService} from '../task_suggestion_service/service';
import {DemoWorkflowSettingsService} from '../workflow_settings_service/service';
import {FormFieldsDemoComponent} from '../form_fields/component';
import {FormFieldsDemoModule} from '../form_fields/module';
import {InterfacesDocumentationComponent} from '../interfaces/component';
import {InterfacesDocumentationModule} from '../interfaces/module';
import {GuidesComponent} from '../guides/component';
import {GuidesModule} from '../guides/module';
import {MinimalTaskCardDemoComponent} from '../minimal_task_card/component';
import {MinimalTaskCardDemoModule} from '../minimal_task_card/module';
import {MinimalDemoThemeModule} from '../minimal_demo_theme/module';
import {SplashPageComponent} from '../splash_page/component';

import {SplashPageModule} from '../splash_page/module';
import {WorkOnTasksWorkflowDemoComponent} from '../work_on_tasks_workflow/component';
import {WorkOnTasksWorkflowDemoModule} from '../work_on_tasks_workflow/module';

import {AppComponent} from './component';
import {AppSidenavComponent} from './sidenav.component';


export const routes: Routes = [
  {path: 'guides/:id', component: GuidesComponent},
  {path: 'interfaces/:id', component: InterfacesDocumentationComponent},
  {path: 'capability-areas/:id', component: CapabilityAreasComponent},
  {path: 'components/minimal-task-card', component: MinimalTaskCardDemoComponent},
  {path: 'components/form-fields', component: FormFieldsDemoComponent},
  {path: 'workflows/work-on-tasks', component: WorkOnTasksWorkflowDemoComponent},
  {path: '', component: SplashPageComponent},
];


@NgModule({
  declarations: [
    AppComponent,
    AppSidenavComponent,
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
    // Support for rending Markdown
    MarkdownModule.forRoot(),
    // Routing
    RouterModule.forRoot(routes),
    // Demo modules
    CapabilityAreasModule,
    FormFieldsDemoModule,
    GuidesModule,
    InterfacesDocumentationModule,
    MinimalTaskCardDemoModule,
    MinimalDemoThemeModule,
    SplashPageModule,
    WorkOnTasksWorkflowDemoModule,
    // Cyber UI modules that don't have a corresponding demo module
    CyberUiDelegationMenuModule,
    CyberUiSettingsDialogModule,
    CyberUiSnoozeReasonCollectionDialogModule,
    CyberUiWorkOnTasksWorkflowModule,
  ],
  providers: [
    {provide: TASK_SUGGESTION_SERVICE, useClass: DemoTaskSuggestionService},
    {provide: WORKFLOW_SETTINGS_SERVICE, useClass: DemoWorkflowSettingsService},
    // Customize MatDialogModule options by settings some application-wide defaults
    {provide: MAT_DIALOG_DEFAULT_OPTIONS, useValue: CYBER_UI_MAT_DIALOG_DEFAULT_CONFIG},
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
