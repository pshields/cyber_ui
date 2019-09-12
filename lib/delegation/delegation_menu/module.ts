import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {MatMenuModule} from '@angular/material/menu';

import {DelegationMenuComponent} from './component';
import {CyberUiDelegationMenuService} from './service';


@NgModule({
  imports: [
    CommonModule,
    MatMenuModule,
  ],
  declarations: [DelegationMenuComponent],
  exports: [DelegationMenuComponent],
  providers: [CyberUiDelegationMenuService],
  entryComponents: [DelegationMenuComponent],
})
export class CyberUiDelegationMenuModule {}
