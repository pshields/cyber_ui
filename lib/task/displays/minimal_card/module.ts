import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {MatCardModule} from '@angular/material/card';

import {CyberUiMatActionButtonsModule} from '../../../action/ui/mat_action_buttons/module';

import {CyberUiMinimalTaskCardComponent} from './component';


@NgModule({
  imports: [
    CommonModule,
    MatCardModule,
    CyberUiMatActionButtonsModule,
  ],
  declarations: [
    CyberUiMinimalTaskCardComponent,
  ],
  exports: [
    CyberUiMinimalTaskCardComponent,
  ],
})
export class CyberUiMinimalTaskCardModule {}
