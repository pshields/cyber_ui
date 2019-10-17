import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';

import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';

import {CyberUiAutofocusModule} from '../../autofocus/module';

import {CyberUiTextFieldComponent} from './component';


@NgModule({
  imports: [
    FormsModule,
    CommonModule,
    MatButtonModule,
    MatIconModule,
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
