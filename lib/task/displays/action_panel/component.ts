import {Component, Input} from '@angular/core';

import {Action} from '../../interfaces/action';


@Component({
  selector: 'cyber-ui-actions-panel',
  templateUrl: './component.html',
  styleUrls: ['./component.scss'],
})
export class CyberUiActionsPanelComponent {
  // The task actions to display
  @Input() actions: Action[];
}
