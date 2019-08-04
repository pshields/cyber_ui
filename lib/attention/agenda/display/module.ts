import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {CyberUiAttentionalAgendaItemDisplayModule} from '../item_display/module';

import {CyberUiAttentionalAgendaDisplayComponent} from './component';


@NgModule({
  imports: [
    CommonModule,
    CyberUiAttentionalAgendaItemDisplayModule,
  ],
  declarations: [
    CyberUiAttentionalAgendaDisplayComponent,
  ],
  exports: [
    CyberUiAttentionalAgendaDisplayComponent,
  ]
})
export class CyberUiAttentionalAgendaDisplayModule {}
