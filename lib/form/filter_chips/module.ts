import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MatChipsModule} from '@angular/material/chips';
import {MatIconModule} from '@angular/material/icon';

import {CyberUiChoiceFieldMenuModule} from '../menus/choice_field/module';

import {CyberUiFilterChipsComponent} from './component';
import {CyberUiFilterChipDirective} from './directive';


@NgModule({
  imports: [
    CommonModule,
    MatChipsModule,
    MatIconModule,
    CyberUiChoiceFieldMenuModule,
  ],
  declarations: [
    CyberUiFilterChipDirective,
    CyberUiFilterChipsComponent,
  ],
  exports: [
    CyberUiFilterChipsComponent,
  ]
})
export class CyberUiFilterChipsModule {}
