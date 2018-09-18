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

  // Given an action, returns an object to be bound to the action button's ngStyle on hover
  // This logic uses the action's `color` hint to determine overflow menu actions' hover color
  getHoverStyle(action: Action) {
    if (action.color) {
      return {color: action.color};
    } else {
      return {};
    }
  }
}
