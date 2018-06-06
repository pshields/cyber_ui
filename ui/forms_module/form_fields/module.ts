import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';

import {MatButtonModule} from '@angular/material';
import {MatCheckboxModule} from '@angular/material';
import {MatDialogModule} from '@angular/material';
import {MatIconModule} from '@angular/material';
import {MatInputModule} from '@angular/material';
import {MatSelectModule} from '@angular/material';
import {MatSliderModule} from '@angular/material';
import {MatSlideToggleModule} from '@angular/material';

import {CyberUiAutofocusModule} from '../autofocus/module';

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
  ],
  declarations: [
    CyberUiFormFieldsComponent
  ],
  exports: [
    CyberUiFormFieldsComponent
  ]
})
export class CyberUiFormFieldsModule {}
