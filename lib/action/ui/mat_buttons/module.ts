import {NgModule} from '@angular/core';

import {CommonModule} from '@angular/common';

import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';

import {CyberUiActionContextModule} from '../../context/module';

import {CyberUiMatActionButtonsComponent} from './component';


@NgModule({
  imports: [
    CommonModule,
    MatButtonModule,
    MatIconModule,
    CyberUiActionContextModule,
  ],
  declarations: [
    CyberUiMatActionButtonsComponent,
  ],
  exports: [
    CyberUiMatActionButtonsComponent,
  ],
  entryComponents: [
    CyberUiMatActionButtonsComponent,
  ],
})
export class CyberUiMatActionButtonsModule {}
