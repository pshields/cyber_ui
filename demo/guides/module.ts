import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {MarkdownModule} from 'ngx-markdown';

import {GuidesComponent} from './component';


@NgModule({
  imports: [
    CommonModule,
    MarkdownModule,
  ],
  declarations: [
    GuidesComponent,
  ],
})
export class GuidesModule {}
