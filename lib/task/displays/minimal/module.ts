import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {MatChipsModule} from '@angular/material';

import {CyberUiActionContextModule} from '../../action_context/module';

import {CyberUiMinimalTaskComponent} from './component';


@NgModule({
  imports: [
    CommonModule,
    MatChipsModule,
    CyberUiActionContextModule,
  ],
  declarations: [
    CyberUiMinimalTaskComponent,
  ],
  exports: [
    CyberUiMinimalTaskComponent,
  ],
  entryComponents: [
    CyberUiMinimalTaskComponent,
  ]
})
export class CyberUiMinimalTaskModule {}
