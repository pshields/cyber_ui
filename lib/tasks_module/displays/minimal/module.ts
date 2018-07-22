import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {CyberUiMinimalTaskDisplayComponent} from './component';


@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [
    CyberUiMinimalTaskDisplayComponent,
  ],
  exports: [
    CyberUiMinimalTaskDisplayComponent,
  ],
})
export class CyberUiMinimalTaskDisplayModule {}
