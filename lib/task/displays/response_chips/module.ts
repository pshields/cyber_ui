import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {MatChipsModule} from '@angular/material/chips';
import {MatIconModule} from '@angular/material/icon';

import {CyberUiActionContextModule} from '../../../action/context/module';

import {CyberUiResponseChipsComponent} from './component';


@NgModule({
  imports: [
    CommonModule,
    CyberUiActionContextModule,
    MatChipsModule,
    MatIconModule,
  ],
  declarations: [
    CyberUiResponseChipsComponent,
  ],
  exports: [
    CyberUiResponseChipsComponent,
  ],
})
export class CyberUiResponseChipsModule {}
