import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {MatButtonModule, MatDialogModule, MatSnackBarModule} from '@angular/material';

import {CyberUiActionContextModule} from '../../task/action_context/module';

import {CyberUiFormFieldsModule} from '../form_fields/module';

import {CyberUiEditDialogComponent} from './component';
import {CyberUiEditDialogService} from './service';


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
    MatSnackBarModule,
  ],
  exports: [
    CyberUiEditDialogComponent,
  ],
  providers: [
    CyberUiEditDialogService,
  ],
  entryComponents: [
    CyberUiEditDialogComponent,
  ]
})
export class CyberUiEditDialogModule {}
