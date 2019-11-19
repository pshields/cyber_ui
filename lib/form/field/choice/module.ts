import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';

import {MatButtonModule} from '@angular/material/button';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatIconModule} from '@angular/material/icon';
import {MatSelectModule} from '@angular/material/select';

import {CyberUiChoiceFieldComponent} from './component';


@NgModule({
  imports: [
    FormsModule,
    CommonModule,
    MatButtonModule,
    MatCheckboxModule,
    MatIconModule,
    MatSelectModule,
  ],
  declarations: [
    CyberUiChoiceFieldComponent,
  ],
  exports: [
    CyberUiChoiceFieldComponent,
  ],
  entryComponents: [
    CyberUiChoiceFieldComponent,
  ],
})
export class CyberUiChoiceFieldModule {}
