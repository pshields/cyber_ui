import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {MatButtonModule} from '@angular/material/button';
import {MatDialogModule} from '@angular/material/dialog';
import {MatSnackBarModule} from '@angular/material/snack-bar';

import {CyberUiActionContextModule} from '../../action/context/module';

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
})
export class CyberUiEditDialogModule {}
