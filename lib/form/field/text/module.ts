import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';

import {MatInputModule} from '@angular/material';

import {CyberUiAutofocusModule} from '../../autofocus/module';

import {CyberUiTextFieldComponent} from './component';


@NgModule({
  imports: [
    FormsModule,
    CommonModule,
    MatInputModule,
    CyberUiAutofocusModule,
  ],
  declarations: [
    CyberUiTextFieldComponent,
  ],
  exports: [
    CyberUiTextFieldComponent,
  ]
})
export class CyberUiTextFieldModule {}
