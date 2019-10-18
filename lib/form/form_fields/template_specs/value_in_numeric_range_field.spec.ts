import {NgModel} from '@angular/forms';
import {async} from '@angular/core/testing';
import {By} from '@angular/platform-browser';

import {ValueInNumericRangeField} from '../../field/value_in_numeric_range/field';

import {configureTestingModuleAndSetupContext, TestContext, TestDialogComponent} from '../component.spec';


describe('ValueInNumericRangeField template', () => {
  const ctx: TestContext = {};
  configureTestingModuleAndSetupContext(ctx);

  // TODO Add helpDialog test for the remaining element types / templates

  const defaultOptions = {
    label: 'Test',
    propertyName: 'test',
    minValue: 0,
    maxValue: 10,
    step: 1,
  };

  describe('when the user initiates a change', () => {
    let eventEmissions = [];

    beforeEach(async(() => {
      eventEmissions = [];
      ctx.harnessComponent.fields = [
        new ValueInNumericRangeField(defaultOptions)
      ];
      ctx.fixture.detectChanges();
    }));

    beforeEach(async(() => {
      ctx.component.event.subscribe(event => eventEmissions.push(event));
      // Simulate the user changing the slider value
      const sliderDebugEl = ctx.fixture.debugElement.query(By.directive(NgModel));
      sliderDebugEl.injector.get(NgModel).control.setValue(5);
    }));

    it('emits a change event', () => {
      expect(eventEmissions.length).toEqual(1);
      expect(eventEmissions[0].type).toEqual('change');
    });

  });

  describe('when not configured to show a help dialog', () => {

    beforeEach(async(() => {
      ctx.harnessComponent.fields = [
        new ValueInNumericRangeField(defaultOptions)
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
    // This behavior is activated by the presence of `helpDialog` in the provided ValueInNumericRangeFieldOptions

    beforeEach(async(() => {
      ctx.harnessComponent.fields = [
        new ValueInNumericRangeField(
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

  // TODO When the model property is defined, the clear button is displayed
  // TODO When the model property is defined, the clear button clears it
  // TODO When the model property is undefined, the clear button is not displayed
});
