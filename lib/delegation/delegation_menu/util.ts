import {ComponentFactory} from '@angular/core';

import {CyberUiActionContext} from '../../task/interfaces/action_context';

import {DelegatableThing} from '../interfaces/delegatable_thing';

import {DelegationMenuComponent} from './component';


// A utility method for mounting and triggering a delegation menu in response to a task action
// (such as a 'DELEGATE TO...' button being selected)
export function delegationMenuActivationHandler(
    // The thing to be delegated
    delegatableThing: DelegatableThing,
    // The display context for the menu
    ctx: CyberUiActionContext,
  ) {
  // Mount and activate the delegation menu
  // First, clear previously mounted components
  ctx.viewContainer.clear();
  const factory: ComponentFactory<DelegationMenuComponent> = ctx.componentFactoryResolver.resolveComponentFactory(DelegationMenuComponent);
  const delegationMenuCmpRef = ctx.viewContainer.createComponent(factory);
  delegationMenuCmpRef.instance.delegatableThing = delegatableThing;
  // Trigger the delegation menu, causing it to open
  // Needs to be done asynchronously to wait for the component's view to initialize
  setTimeout(() => delegationMenuCmpRef.instance.trigger.openMenu(), 0);
}
