import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {CyberUiFormFieldsModule} from 'lib/form/form_fields/module';

import {FormFieldsDemoComponent} from './component';


@NgModule({
  imports: [
    CommonModule,
    CyberUiFormFieldsModule,
  ],
  declarations: [
    FormFieldsDemoComponent,
  ]
})
export class FormFieldsDemoModule {}
