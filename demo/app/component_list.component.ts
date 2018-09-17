import {Component} from '@angular/core';

import {GUIDES} from '../guides/component';
import {INTERFACES} from '../interfaces/component';


@Component({
  selector: 'component-list',
  templateUrl: './component_list.component.html',
})
export class ComponentListComponent {
  // Expose for use in the template
  readonly GUIDES = GUIDES;
  readonly INTERFACES = INTERFACES;
}
