import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {MatSnackBarModule} from '@angular/material';

import {CyberUiMinimalTaskDisplayModule} from 'lib/public_api';
import {CyberUiSnoozeReasonCollectionDialogModule} from 'lib/public_api';


import {MinimalTaskDisplayDemoComponent} from './component';


@NgModule({
  imports: [
    CommonModule,
    MatSnackBarModule,
    CyberUiMinimalTaskDisplayModule,
    CyberUiSnoozeReasonCollectionDialogModule,
  ],
  declarations: [
    MinimalTaskDisplayDemoComponent,
  ]
})
export class MinimalTaskDisplayDemoModule {}
