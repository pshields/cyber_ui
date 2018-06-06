import {NgModule} from '@angular/core';
import {CyberUiAutofocusDirective} from './directive';


@NgModule({
  declarations: [
    CyberUiAutofocusDirective,
  ],
  exports: [
    CyberUiAutofocusDirective,
  ]
})
export class CyberUiAutofocusModule {}
