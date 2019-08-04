import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';

import {MatButtonModule} from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';

import {CyberUiAttentionalAgendaDisplayModule} from 'lib/public_api';
import {CyberUiTimeboxCountdownDisplayModule} from 'lib/public_api';

import {AttentionManagementGuideComponent} from './component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
    CyberUiAttentionalAgendaDisplayModule,
    CyberUiTimeboxCountdownDisplayModule,
  ],
  declarations: [
    AttentionManagementGuideComponent,
  ],
  exports: [
    AttentionManagementGuideComponent,
  ],
})
export class AttentionManagementGuideModule {}
