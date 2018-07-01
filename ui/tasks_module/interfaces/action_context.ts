import {ViewContainerRef} from '@angular/core';


// A context object with properties potentially useful for action handlers
// The initial use case is to pass a view container ref to the action handler,
// in case it wishes to mount e.g. a menu to be shown next to the action button.
export interface CyberUiActionContext {
  viewContainer?: ViewContainerRef;
}
