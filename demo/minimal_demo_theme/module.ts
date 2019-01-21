import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';

import {MinimalDemoFooterComponent} from './footer.component';


@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [
    MinimalDemoFooterComponent,
  ],
  exports: [
    MinimalDemoFooterComponent,
  ]
})
export class MinimalDemoThemeModule {}
