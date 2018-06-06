import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {MatExpansionModule} from '@angular/material';

import {CyberUiWorkOnTasksAccordionWorkflowComponent} from './component';
import {CyberUiMinimalTaskExpansionPanelModule} from '../../../tasks_module/displays/minimal_expansion_panel/module';


@NgModule({
  imports: [
    CommonModule,
    MatExpansionModule,
    CyberUiMinimalTaskExpansionPanelModule,
  ],
  declarations: [
    CyberUiWorkOnTasksAccordionWorkflowComponent
  ],
  exports: [
    CyberUiWorkOnTasksAccordionWorkflowComponent
  ],
})
export class CyberUiWorkOnTasksAccordionWorkflowModule {}
