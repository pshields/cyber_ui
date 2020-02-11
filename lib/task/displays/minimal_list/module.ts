import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';

import {CyberUiMinimalTaskModule} from '../minimal/module';

import {CyberUiMinimalTaskListComponent} from './component';


@NgModule({
  imports: [
    CommonModule,
    CyberUiMinimalTaskModule,
    MatProgressSpinnerModule,
  ],
  declarations: [
    CyberUiMinimalTaskListComponent,
  ],
  exports: [
    CyberUiMinimalTaskListComponent,
  ],
})
export class CyberUiMinimalTaskListModule {}
