import {ComponentFactoryResolver, ViewContainerRef} from '@angular/core';

import {MatDialogRef} from '@angular/material';


// A context object with properties potentially useful for action handlers
// The initial use case is to pass a view container ref to the action handler,
// in case it wishes to mount e.g. a menu to be shown next to the action button.
export interface CyberUiActionContext {

  // A component factory resolver, provided in case it is needed to e.g. mount a custom menu component
  componentFactoryResolver?: ComponentFactoryResolver;

  // If this action is appearing inside of a dialog, this is a reference to the enclosing dialog
  // Typing note: we don't know the type of the dialog component here, so {} is used
  dialogRef?: MatDialogRef<{}>;

  // A view container ref, to use for e.g. mounting and triggering a menu in response to an action being selected
  // TODO clear up *which* view container is referred to here
  // Is it one created specifically for the CyberUiActionContext directive? Does it correspond to the button element? The nearest ancestor component?
  viewContainer?: ViewContainerRef;
}
