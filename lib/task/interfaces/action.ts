// An action a user can take when being shown a task
// This interface is highly experimental and likely to change over time
export interface Action<HANDLER_OPTIONS_T, HANDLER_RETURN_T> {

  // The user-facing label for this action
  label: string;

  // Function to call when the user chooses this action
  handler: (options: HANDLER_OPTIONS_T) => HANDLER_RETURN_T;

}
