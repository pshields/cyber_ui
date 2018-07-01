import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {MatButtonModule} from '@angular/material';
import {MatExpansionModule} from '@angular/material';

import {CyberUiActionContextModule} from '../../action_context/module';

import {CyberUiMinimalTaskExpansionPanelComponent} from './component';


@NgModule({
  imports: [
    CommonModule,
    MatButtonModule,
    MatExpansionModule,
    CyberUiActionContextModule,
  ],
  declarations: [
    CyberUiMinimalTaskExpansionPanelComponent,
  ],
  exports: [
    CyberUiMinimalTaskExpansionPanelComponent,
  ],
})
export class CyberUiMinimalTaskExpansionPanelModule {}
