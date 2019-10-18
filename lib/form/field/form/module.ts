import {NgModule} from '@angular/core';

import {CyberUiUnimplementedFieldModule} from '../unimplemented/module';

import {CyberUiFormFieldComponent} from './component';
import {CyberUiFormFieldComponentResolver} from './resolver.service';


@NgModule({
  imports: [
    // This module provides a placeholder form field implementation
    CyberUiUnimplementedFieldModule,
  ],
  declarations: [
    CyberUiFormFieldComponent,
  ],
  exports: [
    CyberUiFormFieldComponent,
  ],
  providers: [
    CyberUiFormFieldComponentResolver,
  ]
})
export class CyberUiFormFieldModule {}
