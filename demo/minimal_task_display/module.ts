import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {CyberUiMinimalTaskDisplayModule} from 'ui/tasks_module/displays/minimal/module';

import {MinimalTaskDisplayDemoComponent} from './component';


@NgModule({
  imports: [
    CommonModule,
    CyberUiMinimalTaskDisplayModule,
  ],
  declarations: [
    MinimalTaskDisplayDemoComponent,
  ]
})
export class MinimalTaskDisplayDemoModule {}
