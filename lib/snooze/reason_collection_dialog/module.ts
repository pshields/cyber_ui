import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {MatButtonModule} from '@angular/material/button';
import {MatDialogModule} from '@angular/material/dialog';
import {MatListModule} from '@angular/material/list';

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
