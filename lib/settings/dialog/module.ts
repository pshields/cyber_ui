import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {MatButtonModule} from '@angular/material/button';
import {MatDialogModule} from '@angular/material/dialog';
import {MatListModule} from '@angular/material/list';

import {CyberUiFormFieldsModule} from '../../form/form_fields/module';

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
