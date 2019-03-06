import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {MatButtonModule} from '@angular/material';
import {MatIconModule} from '@angular/material';
import {MatMenuModule} from '@angular/material';
import {MatRadioModule} from '@angular/material/radio';

import {CyberUiChoiceFieldMenuComponent} from './component';


@NgModule({
  imports: [
    CommonModule,
    MatButtonModule,
    MatIconModule,
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
