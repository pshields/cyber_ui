import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {MatButtonModule} from '@angular/material/button';
import {MatDialogModule} from '@angular/material/dialog';
import {MatListModule} from '@angular/material/list';

import {CyberUiSnoozeReasonCollectionDialogComponent} from './component';
import {CyberUiSnoozeReasonCollectionDialogService} from './service';
import {CyberUiFormFieldModule} from '../../form/field/form/module';


@NgModule({
  imports: [
    CommonModule,
    MatButtonModule,
    MatDialogModule,
    MatListModule,
    CyberUiFormFieldModule,
  ],
  declarations: [
    CyberUiSnoozeReasonCollectionDialogComponent,
  ],
  exports: [
    CyberUiSnoozeReasonCollectionDialogComponent,
  ],
  providers: [
    CyberUiSnoozeReasonCollectionDialogService,
  ],
})
export class CyberUiSnoozeReasonCollectionDialogModule {}
