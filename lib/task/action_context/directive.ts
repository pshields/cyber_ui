import {ComponentFactoryResolver, Directive, Optional, ViewContainerRef} from '@angular/core';

import {MatDialogRef} from '@angular/material/dialog';

import {CyberUiActionContext} from '../interfaces/action_context';


@Directive({
  selector: '[cyberUiActionContext]',
  exportAs: 'cyberUiActionContext',
})
export class CyberUiActionContextDirective {
  constructor(
    private readonly componentFactoryResolver: ComponentFactoryResolver,
    @Optional() private readonly dialogRef: MatDialogRef<{}>,
    private readonly viewContainer: ViewContainerRef,
  ) {}

  getContext(): CyberUiActionContext {
    return {
      componentFactoryResolver: this.componentFactoryResolver,
      dialogRef: this.dialogRef,
      viewContainer: this.viewContainer
    };
  }
}
