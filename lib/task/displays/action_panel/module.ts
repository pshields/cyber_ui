import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {MatButtonModule} from '@angular/material';
import {MatIconModule} from '@angular/material';
import {MatMenuModule} from '@angular/material';

import {CyberUiActionContextModule} from '../../action_context/module';

import {CyberUiActionsPanelComponent} from './component';


@NgModule({
  imports: [
    CommonModule,
    MatButtonModule,
    MatIconModule,
    MatMenuModule,
    CyberUiActionContextModule,
  ],
  declarations: [
    CyberUiActionsPanelComponent,
  ],
  exports: [
    CyberUiActionsPanelComponent,
  ],
  entryComponents: [
    CyberUiActionsPanelComponent,
  ]
})
export class CyberUiActionsPanelModule {}
