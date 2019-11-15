import {Component, Input} from '@angular/core';

import {Action} from '../../defs/action';


// Renders the given actions as a sequence of Material icon buttons
@Component({
  selector: 'cyber-ui-mat-action-icon-buttons',
  templateUrl: 'component.html',
})
export class CyberUiMatActionIconButtonsComponent {

  @Input() actions: Action[];

}
