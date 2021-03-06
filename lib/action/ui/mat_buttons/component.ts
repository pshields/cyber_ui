import {Component, Input} from '@angular/core';

import {Action} from '../../defs/action';


// Renders the given actions as a sequence of Material buttons
@Component({
  selector: 'cyber-ui-mat-action-buttons',
  templateUrl: 'component.html',
  styleUrls: ['component.scss'],
})
export class CyberUiMatActionButtonsComponent {

  @Input() actions: Action[];

  // Optional. Whether to display icons in the buttons if provided (default: true.)
  @Input() useIcons: boolean = true;

}
