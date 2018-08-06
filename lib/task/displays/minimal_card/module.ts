import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {MatButtonModule} from '@angular/material';
import {MatCardModule} from '@angular/material';

import {CyberUiActionContextModule} from '../../action_context/module';

import {CyberUiMinimalTaskCardComponent} from './component';


@NgModule({
  imports: [
    CommonModule,
    MatButtonModule,
    MatCardModule,
    CyberUiActionContextModule,
  ],
  declarations: [
    CyberUiMinimalTaskCardComponent,
  ],
  exports: [
    CyberUiMinimalTaskCardComponent,
  ],
})
export class CyberUiMinimalTaskCardModule {}
