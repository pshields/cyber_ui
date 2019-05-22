import {Component, ComponentFactoryResolver, Inject, ViewContainerRef} from '@angular/core';

import {CYBER_UI_ADD_THING_WORKFLOW_DISPLAY_COMPONENT} from './display_component_injection_token';


@Component({
  selector: 'cyber-ui-add-thing-workflow',
  template: '',
})
export class CyberUiAddThingWorkflowComponent {

  constructor(
    // Common display component choices might include:
    // * cyber-ui-minimal-task-card
    // * cyber-ui-form-fields
    @Inject(CYBER_UI_ADD_THING_WORKFLOW_DISPLAY_COMPONENT) readonly displayComponent,
    readonly componentFactoryResolver: ComponentFactoryResolver,
    readonly viewContainerRef: ViewContainerRef,
  ) {
    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(displayComponent);
    this.viewContainerRef.createComponent(componentFactory);
    // TODO Implement save and exit logic
  }

}
