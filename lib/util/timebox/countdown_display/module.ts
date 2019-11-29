import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {MatButtonModule} from '@angular/material/button';
import {MatMenuModule} from '@angular/material/menu';

import {CyberUiDurationModule} from '../duration/module';

import {CyberUiTimeboxCountdownDisplayComponent} from './component';


@NgModule({
  imports: [
    CommonModule,
    MatButtonModule,
    MatMenuModule,
    CyberUiDurationModule,
  ],
  declarations: [
    CyberUiTimeboxCountdownDisplayComponent,
  ],
  exports: [
    CyberUiTimeboxCountdownDisplayComponent,
  ]
})
export class CyberUiTimeboxCountdownDisplayModule {}
