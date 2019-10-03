import {Component, ChangeDetectionStrategy, Input, HostBinding} from '@angular/core';

import {CyberUiStatusIndicatorState} from './state';


@Component({
  selector: 'cyber-ui-status-indicator',
  templateUrl: 'component.html',
  styleUrls: ['component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CyberUiStatusIndicatorComponent {
  @Input() state: CyberUiStatusIndicatorState;

  @HostBinding('attr.status') get status() {
    return this.state && this.state.status;
  }
}
