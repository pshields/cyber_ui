import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {CyberUiMinimalTaskCardModule} from '../minimal_card/module';

import {CyberUiMinimalTaskCardListComponent} from './component';


@NgModule({
  imports: [
    CommonModule,
    CyberUiMinimalTaskCardModule
  ],
  declarations: [
    CyberUiMinimalTaskCardListComponent,
  ],
  exports: [
    CyberUiMinimalTaskCardListComponent,
  ],
  entryComponents: [
    // This component will often be dynamically generated and provided to cyber-ui-work-on-tasks-workflow
    CyberUiMinimalTaskCardListComponent,
  ]
})
export class CyberUiMinimalTaskCardListModule {}
