import {Component} from '@angular/core';
import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {CyberUiFormsModule} from '../module';


describe('CyberUiAutofocusDirective', () => {

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [CyberUiFormsModule],
      declarations: [
        BoundDirectiveTestComponent,
        UnboundDirectiveTestComponent,
      ]
    }).compileComponents();
  }));

  describe('when the directive is bound to true', () => {
    let fixture: ComponentFixture<BoundDirectiveTestComponent>;
    let component: BoundDirectiveTestComponent;
    let inputEl: HTMLInputElement;

    beforeEach(async(() => {
      fixture = TestBed.createComponent(BoundDirectiveTestComponent);
      component = fixture.componentInstance;
      inputEl = fixture.elementRef.nativeElement.querySelector('input');
      spyOn(inputEl, 'focus');
      component.autofocus = true;
      fixture.detectChanges();
    }));

    it('autofocuses', () => {
      expect(inputEl.focus).toHaveBeenCalled();
    });
  });

  describe('when the directive is bound to false', () => {
    let fixture: ComponentFixture<BoundDirectiveTestComponent>;
    let component: BoundDirectiveTestComponent;
    let inputEl: HTMLInputElement;

    beforeEach(async(() => {
      fixture = TestBed.createComponent(BoundDirectiveTestComponent);
      component = fixture.componentInstance;
      inputEl = fixture.elementRef.nativeElement.querySelector('input');
      spyOn(inputEl, 'focus');
      component.autofocus = false;
      fixture.detectChanges();
    }));

    it('does not autofocus', () => {
      expect(inputEl.focus).not.toHaveBeenCalled();
    });

  });

  describe('when no data is bound to the directive', () => {
    let fixture: ComponentFixture<UnboundDirectiveTestComponent>;
    let inputEl: HTMLInputElement;

    beforeEach(async(() => {
      fixture = TestBed.createComponent(UnboundDirectiveTestComponent);
      inputEl = fixture.elementRef.nativeElement.querySelector('input');
      spyOn(inputEl, 'focus');
      fixture.detectChanges();
    }));

    it('still autofocuses', () => {
      expect(inputEl.focus).toHaveBeenCalled();
    });
  });
});


@Component({template: '<input cyberUiAutofocus />'})
export class UnboundDirectiveTestComponent {}

@Component({template: '<input [cyberUiAutofocus]="autofocus" />'})
export class BoundDirectiveTestComponent {
  // As part of test setup, set this to the desired value
  autofocus: boolean;
}
