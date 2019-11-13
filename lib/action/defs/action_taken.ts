import {Action} from './action';
import {CyberUiActionContext} from './action_context';


// Interface for a record of an action taken
export interface ActionTaken {
  action: Action;
  context: CyberUiActionContext;
}
