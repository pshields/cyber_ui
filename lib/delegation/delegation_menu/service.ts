import {Injectable} from '@angular/core';

import {ReplaySubject} from 'rxjs';

import {DelegationMenuState} from './state';
import {DelegationTarget} from '../interfaces/delegation_target';
import {RegisterDelegationTargetsOptions} from './defs/register_delegation_targets_options';


@Injectable()
export class CyberUiDelegationMenuService {
  // The latest state to use to power the delegation menu
  readonly state = new ReplaySubject<DelegationMenuState>(1);

  private registeredDelegationTargets: DelegationTarget[] = [];

  // Registers a delegation target with the service
  // At the moment, this is irrevocable, but it doesn't need to be
  registerDelegationTargets(options: RegisterDelegationTargetsOptions) {
    if (options.clearPreviousRegistrations) {
      this.registeredDelegationTargets = options.targets.slice();
    } else {
      this.registeredDelegationTargets = this.registeredDelegationTargets.concat(options.targets);
    }
    // Send any subscribed delegation menus the latest menu state
    this.state.next({
      // Provide a shallow copy of registeredDelegationTargets in order to
      // prevent subscribers from altering this protected internal state
      delegationTargets: this.registeredDelegationTargets.slice()
    });
  }

}
