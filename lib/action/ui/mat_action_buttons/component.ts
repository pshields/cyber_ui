import {Component, Input} from '@angular/core';

import {Action} from '../../defs/action';


// Renders the given actions as a sequence of Material buttons
@Component({
  selector: 'cyber-ui-mat-action-buttons',
  templateUrl: 'component.html',
})
export class CyberUiMatActionButtonsComponent {

  @Input() actions: Action[];

}
