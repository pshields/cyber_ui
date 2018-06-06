import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {MatButtonModule} from '@angular/material';
import {MatExpansionModule} from '@angular/material';

import {CyberUiMinimalTaskExpansionPanelComponent} from './component';


@NgModule({
  imports: [
    CommonModule,
    MatButtonModule,
    MatExpansionModule,
  ],
  declarations: [
    CyberUiMinimalTaskExpansionPanelComponent,
  ],
  exports: [
    CyberUiMinimalTaskExpansionPanelComponent,
  ],
})
export class CyberUiMinimalTaskExpansionPanelModule {}
