import {Component, ViewChild} from '@angular/core';

import {MatMenuTrigger} from '@angular/material/menu';

import {DelegationMenuService} from './service';
import {DelegationMenuState} from './state';


@Component({
  selector: 'cyber-ui-delegation-menu',
  templateUrl: './component.html'
})
export class DelegationMenuComponent {

  // Reference to the underlying MatMenuTrigger
  @ViewChild('trigger', {read: MatMenuTrigger, static: true}) trigger: MatMenuTrigger;

  // All applicable state is stored in the DelegationMenuState
  state: DelegationMenuState = {
    delegationTargets: []
  };

  constructor(
    readonly delegationMenuService: DelegationMenuService
  ) {
    // Subscribe to state updates from the delegation menu service
    delegationMenuService.state.subscribe(state => this.state = state);
  }
}
