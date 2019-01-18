import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {MatButtonModule, MatDialogModule, MatListModule} from '@angular/material';

import {CyberUiSettingsDialogComponent} from './component';
import {CyberUiSettingsDialogService} from './service';


@NgModule({
  imports: [
    CommonModule,
    MatButtonModule,
    MatDialogModule,
    MatListModule,
  ],
  declarations: [
    CyberUiSettingsDialogComponent,
  ],
  exports: [
    CyberUiSettingsDialogComponent,
  ],
  entryComponents: [
    CyberUiSettingsDialogComponent,
  ],
  providers: [
    CyberUiSettingsDialogService,
  ],
})
export class CyberUiSettingsDialogModule {}
