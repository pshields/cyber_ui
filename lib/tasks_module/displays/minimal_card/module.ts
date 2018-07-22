import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {MatButtonModule} from '@angular/material';
import {MatCardModule} from '@angular/material';

import {CyberUiMinimalTaskCardComponent} from './component';


@NgModule({
  imports: [
    CommonModule,
    MatButtonModule,
    MatCardModule,
  ],
  declarations: [
    CyberUiMinimalTaskCardComponent,
  ],
  exports: [
    CyberUiMinimalTaskCardComponent,
  ],
})
export class CyberUiMinimalTaskCardModule {}
