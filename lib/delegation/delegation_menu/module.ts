import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {MatMenuModule} from '@angular/material/menu';

import {DelegationMenuComponent} from './component';
import {DelegationMenuService} from './service';


@NgModule({
  imports: [
    CommonModule,
    MatMenuModule,
  ],
  declarations: [DelegationMenuComponent],
  exports: [DelegationMenuComponent],
  providers: [DelegationMenuService],
  entryComponents: [DelegationMenuComponent],
})
export class CyberUiDelegationMenuModule {}
