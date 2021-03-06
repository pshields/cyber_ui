import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {MatChipsModule} from '@angular/material/chips';

import {CyberUiActionContextModule} from '../../../action/context/module';

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
})
export class CyberUiMinimalTaskModule {}
