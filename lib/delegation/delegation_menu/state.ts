import {DelegationTarget} from '../interfaces/delegation_target';


export interface DelegationMenuState {
  // A list of delegation targets to show in the menu
  // The expectation is that the list of targets will be appropriately
  // sorted and truncated prior to being stashed in the state
  delegationTargets: DelegationTarget[];
}
