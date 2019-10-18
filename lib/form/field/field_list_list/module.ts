import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';

import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';

import {CyberUiAutofocusModule} from '../../autofocus/module';
import {CyberUiFormFieldsModule} from '../../form_fields/module';

import {CyberUiFieldListListFieldComponent} from './component';


@NgModule({
  imports: [
    FormsModule,
    CommonModule,
    MatButtonModule,
    MatIconModule,
    CyberUiAutofocusModule,
    CyberUiFormFieldsModule,
  ],
  declarations: [
    CyberUiFieldListListFieldComponent,
  ],
  exports: [
    CyberUiFieldListListFieldComponent,
  ],
  entryComponents: [
    CyberUiFieldListListFieldComponent,
  ],
})
export class CyberUiFieldListListFieldModule {}
