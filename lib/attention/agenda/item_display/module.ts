import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';

import {CyberUiTimeboxCountdownDisplayModule} from '../../../util/timebox/countdown_display/module';

import {CyberUiAttentionalAgendaItemDisplayComponent} from './component';


@NgModule({
  imports: [
    CommonModule,
    CyberUiTimeboxCountdownDisplayModule,
    MatButtonModule,
    MatToolbarModule,
  ],
  declarations: [
    CyberUiAttentionalAgendaItemDisplayComponent,
  ],
  exports: [
    CyberUiAttentionalAgendaItemDisplayComponent,
  ]
})
export class CyberUiAttentionalAgendaItemDisplayModule {}
