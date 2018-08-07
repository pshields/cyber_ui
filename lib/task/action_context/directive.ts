import {ComponentFactoryResolver, Directive, ViewContainerRef} from '@angular/core';

import {CyberUiActionContext} from '../interfaces/action_context';


@Directive({
  selector: '[cyberUiActionContext]',
  exportAs: 'cyberUiActionContext',
})
export class CyberUiActionContextDirective {
  constructor(
    private readonly componentFactoryResolver: ComponentFactoryResolver,
    private readonly viewContainer: ViewContainerRef,
  ) {}

  getContext(): CyberUiActionContext {
    return {
      componentFactoryResolver: this.componentFactoryResolver,
      viewContainer: this.viewContainer
    };
  }
}
