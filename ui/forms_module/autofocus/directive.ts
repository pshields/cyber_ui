import {AfterViewInit, Directive, ElementRef, Input} from '@angular/core';


// Directive for automatically focusing on an element
// By default, the native 'autofocus' attribute on input elements only causes focus when the element first enters the DOM
// Since Angular sometimes keeps elements in the DOM when navigating to another route, the native autofocus attribute doesn't always work
// This directive provides more comprehensive support for autofocusing, including after navigation events
@Directive({
  selector: '[cyberUiAutofocus]',
})
export class CyberUiAutofocusDirective implements AfterViewInit {
  // If used without data binding, the value of `autofocus` will be the empty string
  // We'll assume the user wants autofocus behavior in that case
  // The only time we don't want autofocus is when `autofocous` is set to false via the input binding
  @Input() cyberUiAutofocus: boolean | string = true;

  constructor(
    private el: ElementRef,
  ) {}

  ngAfterViewInit() {
    if (this.cyberUiAutofocus === true || this.cyberUiAutofocus === '') {
      // Call focus() asynchronously to avoid 'Expression was changed after it was checked' errors
      setTimeout(() => this.el.nativeElement.focus(), 0);
    }
  }
}
