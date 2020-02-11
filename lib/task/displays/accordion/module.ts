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
})
export class CyberUiTaskAccordionModule {}
