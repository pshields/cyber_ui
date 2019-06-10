import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MatButtonModule} from '@angular/material/button';

import {CyberUiEditDialogModule} from 'lib/public_api';
import {CyberUiFormFieldsModule} from 'lib/public_api';

import {FormFieldsDemoComponent} from './component';


@NgModule({
  imports: [
    CommonModule,
    CyberUiEditDialogModule,
    CyberUiFormFieldsModule,
    MatButtonModule
  ],
  declarations: [
    FormFieldsDemoComponent,
  ]
})
export class FormFieldsDemoModule {}
