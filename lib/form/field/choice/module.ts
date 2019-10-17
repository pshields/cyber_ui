import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';

import {MatSelectModule} from '@angular/material';

import {CyberUiChoiceFieldComponent} from './component';

@NgModule({
  imports: [
    FormsModule,
    CommonModule,
    MatSelectModule,
  ],
  declarations: [
    CyberUiChoiceFieldComponent,
  ],
  exports: [
    CyberUiChoiceFieldComponent,
  ]
})
export class CyberUiChoiceFieldModule {}
