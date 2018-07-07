import {Component} from '@angular/core';

import {INTERFACES} from '../interfaces/component';


@Component({
  selector: 'component-list',
  templateUrl: './component_list.component.html',
})
export class ComponentListComponent {
  // Expose for use in the template
  readonly INTERFACES = INTERFACES;
}
