import {NgModel} from '@angular/forms';
import {async, fakeAsync, tick} from '@angular/core/testing';
import {By} from '@angular/platform-browser';

import {MatCheckbox} from '@angular/material/checkbox';
import {MatSlideToggle} from '@angular/material/slide-toggle';

import {BooleanField} from '../../field/boolean';

import {configureTestingModuleAndSetupContext, TestContext, TestDialogComponent} from '../component.spec';


// This test uses the default element for boolean fields (FormFieldElement.MAT_CHECKBOX)
// For the version of the tests using the slide toggle, see boolean_field_slide_toggle.spec.ts.
describe('BooleanField template', () => {
  const ctx: TestContext = {};
  configureTestingModuleAndSetupContext(ctx);

  const defaultOptions = {
    label: 'Test',
    propertyName: 'test',
  };

  it('uses a checkbox', fakeAsync(() => {
    ctx.harnessComponent.fields = [
      new BooleanField(defaultOptions)
    ];
    ctx.fixture.detectChanges();
    tick();
    expect(ctx.fixture.debugElement.query(By.directive(MatCheckbox))).not.toBeNull();
    expect(ctx.fixture.debugElement.query(By.directive(MatSlideToggle))).toBeNull();
  }));

  describe('when the user initiates a change', () => {
    let numChangeEmissions = 0;

    beforeEach(async(() => {
      numChangeEmissions = 0;
      ctx.harnessComponent.fields = [
        new BooleanField(defaultOptions)
      ];
      ctx.fixture.detectChanges();
    }));

    beforeEach(async(() => {
      ctx.component.change.subscribe(() => numChangeEmissions += 1);
      // Simulate a change event
      const inputDebugEl = ctx.fixture.debugElement.query(By.directive(NgModel));
      inputDebugEl.injector.get(NgModel).control.setValue(false);
    }));

    it('emits a change event', () => {
      expect(numChangeEmissions).toEqual(1);
    });
  });

  describe('when not configured to show a help dialog', () => {

    beforeEach(async(() => {
      ctx.harnessComponent.fields = [
        new BooleanField(defaultOptions)
      ];
      ctx.fixture.detectChanges();
    }));

    it('does not show a help dialog', () => {
      const iconNamesPresentInComponent = Array
        .from(ctx.fixture.debugElement.nativeElement.querySelectorAll('mat-icon'))
        .map((el: HTMLElement) => el.innerText);
      expect(iconNamesPresentInComponent).not.toContain('help');
    });
  });

  describe('when configured to show a help dialog', () => {

    beforeEach(async(() => {
      ctx.harnessComponent.fields = [
        new BooleanField(
          Object.assign({}, defaultOptions, {helpDialog: TestDialogComponent})
        )
      ];
      ctx.fixture.detectChanges();
    }));

    it('shows a help button that brings up the help dialog', () => {
      const iconNamesPresentInComponent = Array
        .from(ctx.fixture.debugElement.nativeElement.querySelectorAll('mat-icon'))
        .map((el: HTMLElement) => el.innerText);
      expect(iconNamesPresentInComponent).toContain('help');
      // TODO Expect clicking on the button to open a dialog containing TestDialogComponent
    });
  });
});
