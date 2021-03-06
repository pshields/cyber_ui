import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {MatMenuModule} from '@angular/material/menu';

import {CyberUiActionContextModule} from '../../action/context/module';

import {DelegationMenuComponent} from './component';
import {CyberUiDelegationMenuService} from './service';


@NgModule({
  imports: [
    CommonModule,
    MatMenuModule,
    CyberUiActionContextModule
  ],
  declarations: [DelegationMenuComponent],
  exports: [DelegationMenuComponent],
  providers: [CyberUiDelegationMenuService],
})
export class CyberUiDelegationMenuModule {}
