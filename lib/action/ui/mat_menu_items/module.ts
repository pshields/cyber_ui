import {NgModule} from '@angular/core';

import {CommonModule} from '@angular/common';

import {MatIconModule} from '@angular/material/icon';
import {MatMenuModule} from '@angular/material/menu';

import {CyberUiActionContextModule} from '../../context/module';

import {CyberUiMatActionMenuItemsComponent} from './component';


@NgModule({
  imports: [
    CommonModule,
    MatIconModule,
    MatMenuModule,
    CyberUiActionContextModule,
  ],
  declarations: [
    CyberUiMatActionMenuItemsComponent,
  ],
  exports: [
    CyberUiMatActionMenuItemsComponent,
  ],
})
export class CyberUiMatActionMenuItemsModule {}
