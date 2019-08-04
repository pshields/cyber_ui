import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';

import {MatButtonModule, MatFormFieldModule, MatInputModule} from '@angular/material';

import {CyberUiTimeboxCountdownDisplayModule} from 'lib/public_api';

import {AttentionManagementGuideComponent} from './component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
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
