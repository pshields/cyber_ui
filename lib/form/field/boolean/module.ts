import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';

import {MatButtonModule} from '@angular/material/button';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatIconModule} from '@angular/material/icon';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';

import {CyberUiAutofocusModule} from '../../autofocus/module';

import {CyberUiBooleanFieldComponent} from './component';


@NgModule({
  imports: [
    FormsModule,
    CommonModule,
    MatButtonModule,
    MatCheckboxModule,
    MatIconModule,
    MatSlideToggleModule,
    CyberUiAutofocusModule,
  ],
  declarations: [
    CyberUiBooleanFieldComponent,
  ],
  exports: [
    CyberUiBooleanFieldComponent,
  ],
})
export class CyberUiBooleanFieldModule {}
