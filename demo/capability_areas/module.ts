import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {MarkdownModule} from 'ngx-markdown';

import {CapabilityAreasComponent} from './component';


@NgModule({
  imports: [
    CommonModule,
    MarkdownModule,
  ],
  declarations: [
    CapabilityAreasComponent,
  ],
})
export class CapabilityAreasModule {}
