import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';

import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatSliderModule} from '@angular/material/slider';

import {CyberUiAutofocusModule} from '../../autofocus/module';

import {CyberUiValueInNumericRangeFieldComponent} from './component';


@NgModule({
  imports: [
    FormsModule,
    CommonModule,
    MatButtonModule,
    MatIconModule,
    MatSliderModule,
    CyberUiAutofocusModule,
  ],
  declarations: [
    CyberUiValueInNumericRangeFieldComponent,
  ],
  exports: [
    CyberUiValueInNumericRangeFieldComponent,
  ],
})
export class CyberUiValueInNumericRangeFieldModule {}
