import {NgModule} from '@angular/core';

import {CyberUiActionContextDirective} from './directive';


@NgModule({
  declarations: [
    CyberUiActionContextDirective
  ],
  exports: [
    CyberUiActionContextDirective,
  ],
})
export class CyberUiActionContextModule {}
