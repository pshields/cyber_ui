import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MatButtonModule} from '@angular/material/button';

import {CyberUiEditDialogModule} from 'lib/public_api';
import {CyberUiFormFieldsModule} from 'lib/public_api';

import {FormFieldsDemoComponent} from './component';
import {CyberUiDemoExamplHelpDialogComponent} from './example_help_dialog.component';


@NgModule({
  imports: [
    CommonModule,
    CyberUiEditDialogModule,
    CyberUiFormFieldsModule,
    MatButtonModule
  ],
  declarations: [
    CyberUiDemoExamplHelpDialogComponent,
    FormFieldsDemoComponent,
  ],
  entryComponents: [
    CyberUiDemoExamplHelpDialogComponent,
  ],
})
export class FormFieldsDemoModule {}
