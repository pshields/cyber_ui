import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatMenuModule} from '@angular/material/menu';
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
