import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatListModule} from '@angular/material/list';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MAT_DIALOG_DEFAULT_OPTIONS} from '@angular/material/dialog';
import {MAT_SNACK_BAR_DEFAULT_OPTIONS} from '@angular/material/snack-bar';

import {MarkdownModule} from 'ngx-markdown';

import {CYBER_UI_MAT_DIALOG_DEFAULT_CONFIG} from 'lib/public_api';
import {TASK_SUGGESTION_SERVICE} from 'lib/public_api';
import {WORKFLOW_SETTINGS_SERVICE} from 'lib/public_api';
import {CyberUiMindfullyAttendToTopicTaskProviderModule} from 'lib/public_api';
import {CyberUiSettingsDialogModule} from 'lib/public_api';
import {CyberUiSnoozeReasonCollectionDialogModule} from 'lib/public_api';
import {CyberUiTasksModule} from 'lib/public_api';
import {CyberUiWorkOnTasksWorkflowModule} from 'lib/public_api';
import {CyberUiDelegationMenuModule} from 'lib/public_api';
import {CyberUiFakeBackendModule} from 'lib/public_api';

import {AddThingWorkflowDemoComponent} from '../add_thing_workflow/component';
import {AddThingWorkflowDemoModule} from '../add_thing_workflow/module';
import {AttentionManagementGuideComponent} from '../guides/attention_management/component';
import {AttentionManagementGuideModule} from '../guides/attention_management/module';
import {CapabilityAreasComponent} from '../capability_areas/component';
import {CyberUiDemoViewConceptsComponent} from '../concept/workflows/view/component';
import {CapabilityAreasModule} from 'demo/capability_areas/module';
import {DemoTaskProvider} from '../task_suggestion_service/demo_task_provider';
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
import {TaskProvidersDocumentationComponent} from '../docs/task_providers/component';
import {TaskProvidersDocumentationModule} from '../docs/task_providers/module';
import {TimeboxingGuideComponent} from '../guides/timeboxing/component';
import {TimeboxingGuideModule} from '../guides/timeboxing/module';

import {SplashPageModule} from '../splash_page/module';
import {WorkOnTasksWorkflowDemoComponent} from '../work_on_tasks_workflow/component';
import {WorkOnTasksWorkflowDemoModule} from '../work_on_tasks_workflow/module';

import {AppComponent} from './component';
import {AppSidenavComponent} from './sidenav.component';
import {CyberUiDemoViewConceptsWorkflowModule} from '../concept/workflows/view/module';


export const routes: Routes = [
  {path: 'guides/attention-management', component: AttentionManagementGuideComponent},
  {path: 'guides/timeboxing', component: TimeboxingGuideComponent},
  {path: 'guides/:id', component: GuidesComponent},
  {path: 'interfaces/:id', component: InterfacesDocumentationComponent},
  {path: 'capability-areas/:id', component: CapabilityAreasComponent},
  {path: 'components/minimal-task-card', component: MinimalTaskCardDemoComponent},
  {path: 'components/form-fields', component: FormFieldsDemoComponent},
  {path: 'task-providers/:id', component: TaskProvidersDocumentationComponent},
  {path: 'workflows/add-thing', component: AddThingWorkflowDemoComponent},
  {path: 'workflows/work-on-tasks', component: WorkOnTasksWorkflowDemoComponent},
  {path: 'workflows/view-concepts', component: CyberUiDemoViewConceptsComponent},
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
    AddThingWorkflowDemoModule,
    AttentionManagementGuideModule,
    CapabilityAreasModule,
    CyberUiDemoViewConceptsWorkflowModule,
    FormFieldsDemoModule,
    GuidesModule,
    InterfacesDocumentationModule,
    MinimalTaskCardDemoModule,
    MinimalDemoThemeModule,
    SplashPageModule,
    TaskProvidersDocumentationModule,
    TimeboxingGuideModule,
    WorkOnTasksWorkflowDemoModule,
    // Cyber UI modules that don't have a corresponding demo module
    CyberUiDelegationMenuModule,
    CyberUiMindfullyAttendToTopicTaskProviderModule,
    CyberUiSettingsDialogModule,
    CyberUiSnoozeReasonCollectionDialogModule,
    CyberUiTasksModule,
    CyberUiWorkOnTasksWorkflowModule,
    // Backend to use in the demo
    CyberUiFakeBackendModule,
  ],
  providers: [
    DemoTaskProvider,
    {provide: TASK_SUGGESTION_SERVICE, useClass: DemoTaskSuggestionService},
    {provide: WORKFLOW_SETTINGS_SERVICE, useClass: DemoWorkflowSettingsService},
    // Customize MatDialogModule options by settings some application-wide defaults
    {provide: MAT_DIALOG_DEFAULT_OPTIONS, useValue: CYBER_UI_MAT_DIALOG_DEFAULT_CONFIG},
    // Provide a reasonable default duration for snack bar messages
    {provide: MAT_SNACK_BAR_DEFAULT_OPTIONS, useValue: {duration: 3000}},
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
