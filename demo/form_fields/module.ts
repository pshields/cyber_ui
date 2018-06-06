import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {CyberUiFormFieldsModule} from 'ui/forms_module/form_fields/module';

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
