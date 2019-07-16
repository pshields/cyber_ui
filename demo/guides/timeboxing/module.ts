import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {MatButtonModule} from '@angular/material';

import {TimeboxingGuideComponent} from './component';


@NgModule({
  imports: [
    CommonModule,
    MatButtonModule,
  ],
  declarations: [
    TimeboxingGuideComponent,
  ],
  exports: [
    TimeboxingGuideComponent,
  ],
})
export class TimeboxingGuideModule {}
