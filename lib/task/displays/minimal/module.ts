import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {CyberUiActionContextModule} from '../../action_context/module';

import {CyberUiMinimalTaskDisplayComponent} from './component';


@NgModule({
  imports: [
    CommonModule,
    CyberUiActionContextModule,
  ],
  declarations: [
    CyberUiMinimalTaskDisplayComponent,
  ],
  exports: [
    CyberUiMinimalTaskDisplayComponent,
  ],
})
export class CyberUiMinimalTaskDisplayModule {}
