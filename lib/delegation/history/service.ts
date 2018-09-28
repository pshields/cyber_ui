import {Injectable} from '@angular/core';

import {DelegatableThing} from '../interfaces/delegatable_thing';
import {DelegationActionRecord} from '../interfaces/delegation_action_record';


// A service for managing and appending to a delegatable thing's delegation history
@Injectable({providedIn: 'root'})
export class CyberUiDelegationHistoryService {

  logDelegationAction(thing: DelegatableThing, actionRecord: DelegationActionRecord) {
    // Initialize the 'delegationHistory' property if it's not yet defined
    if (thing.delegationHistory === undefined) {
      thing.delegationHistory = [];
    }
    // Push the latest record onto the history
    thing.delegationHistory.push(actionRecord);
  }
}
