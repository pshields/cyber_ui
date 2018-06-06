import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {MatSnackBarModule} from '@angular/material';

import {CyberUiMinimalTaskCardModule} from 'ui/tasks_module/displays/minimal_card/module';

import {MinimalTaskCardDemoComponent} from './component';


@NgModule({
  imports: [
    CommonModule,
    MatSnackBarModule,
    CyberUiMinimalTaskCardModule,
  ],
  declarations: [
    MinimalTaskCardDemoComponent,
  ]
})
export class MinimalTaskCardDemoModule {}
