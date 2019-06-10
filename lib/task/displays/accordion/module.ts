import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {MatExpansionModule} from '@angular/material/expansion';

import {CyberUiMinimalTaskExpansionPanelModule} from '../minimal_expansion_panel/module';

import {CyberUiTaskAccordionComponent} from './component';


@NgModule({
  imports: [
    CommonModule,
    MatExpansionModule,
    CyberUiMinimalTaskExpansionPanelModule,
  ],
  declarations: [
    CyberUiTaskAccordionComponent,
  ],
  exports: [
    CyberUiTaskAccordionComponent,
  ],
  entryComponents: [
    // This component will often be dynamically generated and provided to cyber-ui-work-on-tasks-workflow
    CyberUiTaskAccordionComponent,
  ]
})
export class CyberUiTaskAccordionModule {}
