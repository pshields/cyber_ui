import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {TimeboxingGuideComponent} from './component';


@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [
    TimeboxingGuideComponent,
  ],
  exports: [
    TimeboxingGuideComponent,
  ],
})
export class TimeboxingGuideModule {}
