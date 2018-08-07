import {ComponentFactoryResolver, ViewContainerRef} from '@angular/core';


// A context object with properties potentially useful for action handlers
// The initial use case is to pass a view container ref to the action handler,
// in case it wishes to mount e.g. a menu to be shown next to the action button.
export interface CyberUiActionContext {
  // A component factory resolver, provided in case it is needed to e.g. mount a custom menu component
  componentFactoryResolver: ComponentFactoryResolver;
  // A view container ref, to use for e.g. mounting and triggering a menu in response to an action being selected
  // TODO clear up *which* view container is referred to here
  // Is it one created specifically for the CyberUiActionContext directive? Does it correspond to the button element? The nearest ancestor component?
  viewContainer?: ViewContainerRef;
}
