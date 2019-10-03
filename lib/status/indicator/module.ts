import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {MatTooltipModule} from '@angular/material/tooltip';

import {CyberUiStatusIndicatorComponent} from './component';


@NgModule({
  imports: [
    CommonModule,
    MatTooltipModule,
  ],
  declarations: [
    CyberUiStatusIndicatorComponent,
  ],
  exports: [
    CyberUiStatusIndicatorComponent,
  ]
})
export class CyberUiStatusIndicatorModule {}
