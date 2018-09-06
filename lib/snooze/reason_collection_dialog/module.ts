import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {MatButtonModule, MatDialogModule, MatListModule} from '@angular/material';

import {CyberUiSnoozeReasonCollectionDialogComponent} from './component';
import {CyberUiSnoozeReasonCollectionDialogService} from './service';


@NgModule({
  imports: [
    CommonModule,
    MatButtonModule,
    MatDialogModule,
    MatListModule,
  ],
  declarations: [
    CyberUiSnoozeReasonCollectionDialogComponent,
  ],
  exports: [
    CyberUiSnoozeReasonCollectionDialogComponent,
  ],
  entryComponents: [
    CyberUiSnoozeReasonCollectionDialogComponent,
  ],
  providers: [
    CyberUiSnoozeReasonCollectionDialogService,
  ],
})
export class CyberUiSnoozeReasonCollectionDialogModule {}
