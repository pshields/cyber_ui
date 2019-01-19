import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {MatButtonModule, MatDialogModule, MatListModule} from '@angular/material';

import {CyberUiFormFieldsModule} from 'lib/form/form_fields/module';

import {CyberUiSettingsDialogComponent} from './component';
import {CyberUiSettingsDialogService} from './service';
import {CyberUiSettingsSectionItemsComponent} from './section_items.component';


@NgModule({
  imports: [
    CommonModule,
    MatButtonModule,
    MatDialogModule,
    MatListModule,
    CyberUiFormFieldsModule,
  ],
  declarations: [
    CyberUiSettingsDialogComponent,
    CyberUiSettingsSectionItemsComponent,
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
