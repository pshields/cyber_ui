import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatMenuModule} from '@angular/material/menu';

import {CyberUiActionContextModule} from '../../../action/context/module';

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
})
export class CyberUiActionsPanelModule {}
