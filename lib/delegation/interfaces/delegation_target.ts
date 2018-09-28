import {CyberUiActionContext} from '../../task/interfaces/action_context';


// A thing that can be delegated to
export interface DelegationTarget {
  // A persistent identifier for this delegation target
  // Intended for use in a task's delegation history recordkeeping
  id?: string;
  // How the target should be shown to the user, e.g. in menus
  label: string;
  // The action to take when the user selects this delegation target
  handler: (ctx?: CyberUiActionContext) => void;
}
