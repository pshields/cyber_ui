import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {CyberUiFilterChipsModule} from '../../form/filter_chips/module';

import {CyberUiWorkOnTasksWorkflowComponent} from './component';
import {CyberUiWorkOnTasksWorkflowService} from './service';


@NgModule({
  imports: [
    CommonModule,
    // TODO Don't depend on Material modules from this theme-agnostic workflow module
    CyberUiFilterChipsModule,
  ],
  declarations: [
    CyberUiWorkOnTasksWorkflowComponent,
  ],
  exports: [
    CyberUiWorkOnTasksWorkflowComponent,
  ],
  providers: [
    CyberUiWorkOnTasksWorkflowService,
  ]
})
export class CyberUiWorkOnTasksWorkflowModule {}
