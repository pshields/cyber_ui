import {Component} from '@angular/core';

import {CYBER_UI_CAPABILITY_AREAS} from '../defs/capability_areas';
import {GUIDES} from '../guides/component';
import {INTERFACES} from '../interfaces/component';
import {AppComponent} from '../app/component';


@Component({
  selector: 'minimal-demo-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class MinimalDemoFooterComponent {

  constructor(readonly appComponent: AppComponent) {}

  // Expose for use in the template
  readonly CAPABILITY_AREAS = CYBER_UI_CAPABILITY_AREAS
  readonly GUIDES = GUIDES;
  readonly INTERFACES = INTERFACES;
}
