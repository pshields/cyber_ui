import {Component, Input} from '@angular/core';

import {Action} from '../../interfaces/action';


@Component({
  selector: 'cyber-ui-response-chips',
  templateUrl: 'component.html',
  styleUrls: ['./component.scss'],
})
export class CyberUiResponseChipsComponent {
  // The actions (responses) to display
  @Input() actions: Action[];
}
