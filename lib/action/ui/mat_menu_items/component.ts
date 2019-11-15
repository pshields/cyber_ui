import {Component, Input} from '@angular/core';

import {Action} from '../../defs/action';


// Renders the given actions as a sequence of Material menu items
@Component({
  selector: 'cyber-ui-mat-action-menu-items',
  templateUrl: 'component.html',
})
export class CyberUiMatActionMenuItemsComponent {

  @Input() actions: Action[];

}
