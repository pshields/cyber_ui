import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {MatButtonModule, MatDialogModule} from '@angular/material';

import {CyberUiActionContextModule} from '../../task/action_context/module';

import {CyberUiFormFieldsModule} from '../form_fields/module';

import {CyberUiEditDialogComponent} from './component';


@NgModule({
  declarations: [
    CyberUiEditDialogComponent,
  ],
  imports: [
    CommonModule,
    CyberUiActionContextModule,
    CyberUiFormFieldsModule,
    MatButtonModule,
    MatDialogModule,
  ],
  exports: [
    CyberUiEditDialogComponent,
  ],
  entryComponents: [
    CyberUiEditDialogComponent,
  ]
})
export class CyberUiEditDialogModule {}
