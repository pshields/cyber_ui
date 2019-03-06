import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {MatMenuModule} from '@angular/material';
import {MatRadioModule} from '@angular/material/radio';

import {CyberUiChoiceFieldMenuComponent} from './component';


@NgModule({
  imports: [
    CommonModule,
    MatMenuModule,
    MatRadioModule,
  ],
  declarations: [
    CyberUiChoiceFieldMenuComponent,
  ],
  entryComponents: [
    CyberUiChoiceFieldMenuComponent,
  ]
})
export class CyberUiChoiceFieldMenuModule {}
