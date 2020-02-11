import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';

import {MatButtonModule} from '@angular/material/button';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatDialogModule} from '@angular/material/dialog';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {MatSliderModule} from '@angular/material/slider';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';

import {CyberUiAutofocusModule} from '../autofocus/module';
import {CyberUiFormFieldModule} from '../field/form/module';

import {CyberUiFormFieldsComponent} from './component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    MatButtonModule,
    MatCheckboxModule,
    MatDialogModule,
    MatIconModule,
    MatInputModule,
    MatSelectModule,
    MatSliderModule,
    MatSlideToggleModule,
    CyberUiAutofocusModule,
    CyberUiFormFieldModule,
  ],
  declarations: [
    CyberUiFormFieldsComponent,
  ],
  exports: [
    CyberUiFormFieldsComponent,
  ],
})
export class CyberUiFormFieldsModule {}
