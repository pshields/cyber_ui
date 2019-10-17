import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';

import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatSelectModule} from '@angular/material/select';

import {CyberUiChoiceFieldComponent} from './component';


@NgModule({
  imports: [
    FormsModule,
    CommonModule,
    MatButtonModule,
    MatIconModule,
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
