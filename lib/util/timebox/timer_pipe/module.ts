import {NgModule} from '@angular/core';

import {TimerPipe} from './pipe';


@NgModule({
  declarations: [TimerPipe],
  exports: [TimerPipe],
})
export class CyberUiTimerPipeModule {}
