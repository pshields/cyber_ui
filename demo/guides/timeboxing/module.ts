import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {MatButtonModule} from '@angular/material';

import {CyberUiTimeboxCountdownDisplayModule} from 'lib/public_api';

import {TimeboxingGuideComponent} from './component';


@NgModule({
  imports: [
    CommonModule,
    MatButtonModule,
    CyberUiTimeboxCountdownDisplayModule,
  ],
  declarations: [
    TimeboxingGuideComponent,
  ],
  exports: [
    TimeboxingGuideComponent,
  ],
})
export class TimeboxingGuideModule {}
