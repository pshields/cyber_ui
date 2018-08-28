import {CyberUiActionContext} from './action_context';


// An action a user can take when being shown a task or other content
export interface Action<
    HANDLER_OPTIONS_T = CyberUiActionContext|undefined,
    HANDLER_RETURN_T = void
  > {

  // The user-facing label for this action
  label: string;

  // Function to call when the user chooses this action
  handler: (options: HANDLER_OPTIONS_T) => HANDLER_RETURN_T;

}
