import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';

import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';

import {CyberUiActionContextModule} from '../../../action/context/module';

import {CyberUiTimeboxCountdownDisplayModule} from '../../../util/timebox/countdown_display/module';

import {CyberUiAttentionalAgendaItemDisplayComponent} from './component';


@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    CyberUiActionContextModule,
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
