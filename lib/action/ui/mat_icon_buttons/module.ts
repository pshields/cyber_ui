import {NgModule} from '@angular/core';

import {CommonModule} from '@angular/common';

import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatTooltipModule} from '@angular/material/tooltip';

import {CyberUiActionContextModule} from '../../context/module';

import {CyberUiMatActionIconButtonsComponent} from './component';


@NgModule({
  imports: [
    CommonModule,
    MatButtonModule,
    MatIconModule,
    MatTooltipModule,
    CyberUiActionContextModule,
  ],
  declarations: [
    CyberUiMatActionIconButtonsComponent,
  ],
  exports: [
    CyberUiMatActionIconButtonsComponent,
  ],
})
export class CyberUiMatActionIconButtonsModule {}
