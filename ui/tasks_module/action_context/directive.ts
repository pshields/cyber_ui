import {Directive, ViewContainerRef} from '@angular/core';

import {CyberUiActionContext} from '../interfaces/action_context';


@Directive({
  selector: '[cyberUiActionContext]',
  exportAs: 'cyberUiActionContext',
})
export class CyberUiActionContextDirective {
  constructor(
    private readonly viewContainer: ViewContainerRef,
  ) {}

  getContext(): CyberUiActionContext {
    return {
      viewContainer: this.viewContainer
    };
  }
}
