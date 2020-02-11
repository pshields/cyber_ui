import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';

import {CyberUiMinimalTaskCardModule} from '../minimal_card/module';

import {CyberUiMinimalTaskCardListComponent} from './component';


@NgModule({
  imports: [
    CommonModule,
    CyberUiMinimalTaskCardModule,
    MatProgressSpinnerModule,
  ],
  declarations: [
    CyberUiMinimalTaskCardListComponent,
  ],
  exports: [
    CyberUiMinimalTaskCardListComponent,
  ],
})
export class CyberUiMinimalTaskCardListModule {}
