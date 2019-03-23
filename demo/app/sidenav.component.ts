import {Component} from '@angular/core';

import {GUIDES} from '../guides/component';
import {INTERFACES} from '../interfaces/component';


@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
})
export class AppSidenavComponent {
  // Expose for use in the template
  readonly GUIDES = GUIDES;
  readonly INTERFACES = INTERFACES;
}
