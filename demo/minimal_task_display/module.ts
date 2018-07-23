import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {MatSnackBarModule} from '@angular/material';

import {CyberUiMinimalTaskDisplayModule} from 'lib/task/displays/minimal/module';

import {MinimalTaskDisplayDemoComponent} from './component';


@NgModule({
  imports: [
    CommonModule,
    MatSnackBarModule,
    CyberUiMinimalTaskDisplayModule,
  ],
  declarations: [
    MinimalTaskDisplayDemoComponent,
  ]
})
export class MinimalTaskDisplayDemoModule {}
