import {Component, ViewChild, OnDestroy, Input} from '@angular/core';

import {MatMenuTrigger} from '@angular/material/menu';

import {Subscription} from 'rxjs';

import {DelegatableThing} from '../interfaces/delegatable_thing';

import {CyberUiDelegationMenuService} from './service';
import {DelegationMenuState} from './state';


@Component({
  selector: 'cyber-ui-delegation-menu',
  templateUrl: './component.html'
})
export class DelegationMenuComponent implements OnDestroy {

  // A reference to the thing to be delegated
  // Note: this may sometimes be set programatically rather than through a template binding
  // in cases where e.g. the delegation menu was programatically instantiated
  @Input() delegatableThing: DelegatableThing;

  // Reference to the underlying MatMenuTrigger
  @ViewChild('trigger', {read: MatMenuTrigger, static: true}) trigger: MatMenuTrigger;

  // All applicable state is stored in the DelegationMenuState
  state: DelegationMenuState = {
    delegationTargets: []
  };

  // Reference to the subscription to the delegation menu service
  delegationMenuServiceStateSubscription: Subscription;

  constructor(
    readonly delegationMenuService: CyberUiDelegationMenuService
  ) {
    // Subscribe to state updates from the delegation menu service
    this.delegationMenuServiceStateSubscription =
        delegationMenuService.state.subscribe(state => this.state = state);
  }

  ngOnDestroy() {
    // Release the subscription in order to avoid a memory leak
    this.delegationMenuServiceStateSubscription.unsubscribe();
  }
}
