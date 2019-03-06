import {Directive, ViewContainerRef} from '@angular/core';


@Directive({
  selector: '[cyberUiFilterChipDirective]',
  exportAs: 'cyberUiFilterChipDirective',
})
export class CyberUiFilterChipDirective {
  constructor(readonly viewContainer: ViewContainerRef) {}
}
