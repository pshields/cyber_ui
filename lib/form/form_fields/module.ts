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
import {CyberUiBooleanFieldModule} from '../field/boolean/module';
import {CyberUiChoiceFieldModule} from '../field/choice/module';
import {CyberUiDiscreteProbabilityDistributionFieldModule} from '../field/discrete_probability_distribution/module';
import {CyberUiTextFieldModule} from '../field/text/module';
import {CyberUiValueInNumericRangeFieldModule} from '../field/value_in_numeric_range/module';

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
    CyberUiTextFieldModule,
    CyberUiChoiceFieldModule,
    CyberUiBooleanFieldModule,
    CyberUiDiscreteProbabilityDistributionFieldModule,
    CyberUiValueInNumericRangeFieldModule,
  ],
  declarations: [
    CyberUiFormFieldsComponent,
  ],
  exports: [
    CyberUiFormFieldsComponent,
  ],
  entryComponents: [
    CyberUiFormFieldsComponent,
  ]
})
export class CyberUiFormFieldsModule {}
