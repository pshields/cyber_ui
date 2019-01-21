import {Component} from '@angular/core';

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
  readonly GUIDES = GUIDES;
  readonly INTERFACES = INTERFACES;
}
