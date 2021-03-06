import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {MatSnackBarModule} from '@angular/material/snack-bar';

import {CyberUiMinimalTaskCardModule} from 'lib/task/displays/minimal_card/module';

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
