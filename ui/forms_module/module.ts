import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';

import {MatButtonModule} from '@angular/material';
import {MatCheckboxModule} from '@angular/material';
import {MatDialogModule} from '@angular/material/dialog';
import {MatIconModule} from '@angular/material';
import {MatInputModule} from '@angular/material';
import {MatSelectModule} from '@angular/material';
import {MatSliderModule} from '@angular/material';
import {MatSlideToggleModule} from '@angular/material';

import {CyberUiAutofocusDirective} from './autofocus/directive';
import {CyberUiFormFieldsComponent} from './form_fields/component';


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
    ],
    declarations: [
      CyberUiAutofocusDirective,
      CyberUiFormFieldsComponent,
    ],
    exports: [
      CyberUiAutofocusDirective,
      CyberUiFormFieldsComponent,
      // Re-export the used Material modules for convenience
      MatButtonModule,
      MatCheckboxModule,
      MatIconModule,
      MatInputModule,
      MatSelectModule,
      MatSliderModule,
      MatSlideToggleModule,
    ],
  })
export class CyberUiFormsModule {}
