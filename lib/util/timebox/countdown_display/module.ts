import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {MatButtonModule} from '@angular/material/button';
import {MatMenuModule} from '@angular/material/menu';

import {CyberUiTimerPipeModule} from '../timer_pipe/module';

import {CyberUiTimeboxCountdownDisplayComponent} from './component';


@NgModule({
  imports: [
    CommonModule,
    MatButtonModule,
    MatMenuModule,
    CyberUiTimerPipeModule,
  ],
  declarations: [
    CyberUiTimeboxCountdownDisplayComponent,
  ],
  exports: [
    CyberUiTimeboxCountdownDisplayComponent,
  ]
})
export class CyberUiTimeboxCountdownDisplayModule {}
