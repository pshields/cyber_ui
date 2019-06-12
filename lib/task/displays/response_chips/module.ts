import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {MatChipsModule} from '@angular/material';

import {CyberUiActionContextModule} from '../../action_context/module';

import {CyberUiResponseChipsComponent} from './component';


@NgModule({
  imports: [
    CommonModule,
    CyberUiActionContextModule,
    MatChipsModule,
  ],
  declarations: [
    CyberUiResponseChipsComponent,
  ],
  exports: [
    CyberUiResponseChipsComponent,
  ],
  entryComponents: [
    CyberUiResponseChipsComponent,
  ]
})
export class CyberUiResponseChipsModule {}
