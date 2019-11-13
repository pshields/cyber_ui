import {ComponentFactoryResolver, Directive, Optional, ViewContainerRef} from '@angular/core';

import {MatDialogRef} from '@angular/material/dialog';

import {Action} from '../defs/action';
import {CyberUiActionContext} from '../defs/action_context';

import {CyberUiActionService} from '../service';


@Directive({
  selector: '[cyberUiActionContext]',
  exportAs: 'cyberUiActionContext',
})
export class CyberUiActionContextDirective {

  constructor(
    private readonly componentFactoryResolver: ComponentFactoryResolver,
    @Optional() private readonly dialogRef: MatDialogRef<{}>,
    @Optional() private readonly service: CyberUiActionService,
    private readonly viewContainer: ViewContainerRef,
  ) {}

  // Dispatches the given action
  dispatch(action: Action) {
    const context = this.getContext();
    action.handler(context);
    if (this.service) {
      this.service.logActionTaken(action, context);
    }
  }

  private getContext(): CyberUiActionContext {
    return {
      componentFactoryResolver: this.componentFactoryResolver,
      dialogRef: this.dialogRef,
      viewContainer: this.viewContainer,
    };
  }

}
