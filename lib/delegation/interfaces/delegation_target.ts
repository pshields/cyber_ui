import {CyberUiActionContext} from '../../task/interfaces/action_context';

import {DelegatableThing} from './delegatable_thing';


// A thing that can be delegated to
export interface DelegationTarget {
  // A persistent identifier for this delegation target
  // Intended for use in a task's delegation history recordkeeping
  id?: string;
  // How the target should be shown to the user, e.g. in menus
  label: string;
  // The action to take when the user selects this delegation target
  delegationTargetHandler: (
    // The thing to be delegated
    delegatableThing: DelegatableThing,
    // The delegation menu's display context, if applicable
    ctx?: CyberUiActionContext,
  ) => void;
}
