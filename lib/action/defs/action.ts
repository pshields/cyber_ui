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


  // ====================
  // VISUAL STYLING HINTS
  // ====================
  //
  // This section describes style-related properties available to actions.
  //
  // These properties may be used to express preferences or hints about
  // how an action should be presented. Some display components may ignore
  // some or all of these properties in favor of a more consistent UX.

  // How prominent should this action be displayed?
  // If not present, this value is assumed to be 1
  // This property use flex-grow semantics, and flex-grow is the primary use case
  // e.g. To make an action twice as large (prominent) as the other actions,
  // set its prominence to 2
  prominence?: number;

  // CSS color string corresponding to this action
  // (If not provided, a reasonable default will be used)
  color?: string;

  // Material icon name(s) corresponding to this action
  // An array type is used because some actions may want to provide
  // a compound icon sequence instead of just a single action.
  iconNames?: string[];

}
