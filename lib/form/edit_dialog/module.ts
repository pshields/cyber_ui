import {NgModule} from '@angular/core';
import {MatButtonModule, MatDialogModule} from '@angular/material';

import {CyberUiFormFieldsModule} from '../form_fields/module';

import {CyberUiEditDialogComponent} from './component';


@NgModule({
  declarations: [
    CyberUiEditDialogComponent,
  ],
  imports: [
    CyberUiFormFieldsModule,
    MatButtonModule,
    MatDialogModule,
  ],
  exports: [
    CyberUiEditDialogComponent,
  ],
  entryComponents: [
    CyberUiEditDialogComponent,
  ]
})
export class CyberUiEditDialogModule {}
