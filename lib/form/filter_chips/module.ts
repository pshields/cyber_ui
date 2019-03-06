import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MatChipsModule} from '@angular/material';

import {CyberUiFilterChipsComponent} from './component';


@NgModule({
  imports: [
    CommonModule,
    MatChipsModule,
  ],
  declarations: [
    CyberUiFilterChipsComponent,
  ],
  exports: [
    CyberUiFilterChipsComponent,
  ]
})
export class CyberUiFilterChipsModule {}
