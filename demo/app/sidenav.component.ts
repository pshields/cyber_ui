import {Component} from '@angular/core';

import {CYBER_UI_CAPABILITY_AREAS} from '../defs/capability_areas';
import {GUIDES} from '../guides/component';
import {INTERFACES} from '../interfaces/component';


@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
})
export class AppSidenavComponent {
  // Expose for use in the template
  readonly CAPABILITY_AREAS = CYBER_UI_CAPABILITY_AREAS;
  readonly GUIDES = GUIDES;
  readonly INTERFACES = INTERFACES;
}
