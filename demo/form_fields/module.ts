import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MatButtonModule} from '@angular/material/button';

import {CyberUiEditDialogModule} from 'lib/public_api';
import {CyberUiFormFieldsModule} from 'lib/public_api';
import {CyberUiBooleanFieldModule} from 'lib/public_api';
import {CyberUiChoiceFieldModule} from 'lib/public_api';
import {CyberUiDiscreteProbabilityDistributionFieldModule} from 'lib/public_api';
import {CyberUiFieldListListFieldModule} from 'lib/public_api';
import {CyberUiTextFieldModule} from 'lib/public_api';
import {CyberUiValueInNumericRangeFieldModule} from 'lib/public_api';

import {FormFieldsDemoComponent} from './component';
import {CyberUiDemoExampleHelpDialogComponent} from './example_help_dialog.component';


@NgModule({
  imports: [
    CommonModule,
    CyberUiEditDialogModule,
    CyberUiFormFieldsModule,
    CyberUiBooleanFieldModule,
    CyberUiChoiceFieldModule,
    CyberUiDiscreteProbabilityDistributionFieldModule,
    CyberUiFieldListListFieldModule,
    CyberUiTextFieldModule,
    CyberUiValueInNumericRangeFieldModule,
    MatButtonModule,
  ],
  declarations: [
    CyberUiDemoExampleHelpDialogComponent,
    FormFieldsDemoComponent,
  ],
  entryComponents: [
    CyberUiDemoExampleHelpDialogComponent,
  ],
})
export class FormFieldsDemoModule {}
