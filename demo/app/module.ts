import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {FormFieldsDemoComponent} from '../form_fields/component';
import {FormFieldsDemoModule} from '../form_fields/module';
import {MinimalTaskDisplayDemoModule} from '../minimal_task_display/module';
import {MinimalTaskDisplayDemoComponent} from '../minimal_task_display/component';

import {AppComponent} from './component';
import {ComponentListComponent} from './component_list.component';


export const routes: Routes = [
  {path: 'components/minimal-task-display', component: MinimalTaskDisplayDemoComponent},
  {path: 'components/form-fields', component: FormFieldsDemoComponent},
  {path: 'components', component: ComponentListComponent},
  {path: '', component: ComponentListComponent},
];


@NgModule({
  declarations: [
    AppComponent,
    ComponentListComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    // Routing
    RouterModule.forRoot(routes),
    // Demo modules
    FormFieldsDemoModule,
    MinimalTaskDisplayDemoModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
