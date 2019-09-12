import {DelegationTarget} from '../../interfaces/delegation_target';


export interface RegisterDelegationTargetsOptions {
  // The list of targets to register
  targets?: DelegationTarget[];
  // Whether to clear the old results (default: false)
  // This is useful when registering a complete list of delegation targets,
  // some of which may have been registered previously
  clearPreviousRegistrations?: boolean;
}
