import {NgModel} from '@angular/forms';
import {async} from '@angular/core/testing';
import {By} from '@angular/platform-browser';

import {ChoiceField} from '../../fields/choice';

import {configureTestingModuleAndSetupContext, TestContext, TestDialogComponent} from '../component.spec';


describe('ChoiceField template', () => {
  const ctx: TestContext = {};
  configureTestingModuleAndSetupContext(ctx);

  const defaultOptions = {
    label: 'Test',
    propertyName: 'test',
    options: [
      new Option('a', 'AAA'),
      new Option('b', 'BBB'),
    ]
  };

  describe('when the user initiates a change', () => {
    let numChangeEmissions = 0;

    beforeEach(async(() => {
      numChangeEmissions = 0;
      ctx.harnessComponent.fields = [
        new ChoiceField(defaultOptions)
      ];
      ctx.fixture.detectChanges();
    }));

    beforeEach(async(() => {
      ctx.component.change.subscribe(() => numChangeEmissions += 1);
      // Simulate the user changing their choice
      const inputDebugEl = ctx.fixture.debugElement.query(By.directive(NgModel));
      inputDebugEl.injector.get(NgModel).control.setValue('b');
    }));

    it('emits a change event', () => {
      expect(numChangeEmissions).toEqual(1);
    });
  });

  describe('when not configured to show a help dialog', () => {

    beforeEach(async(() => {
      ctx.harnessComponent.fields = [
        new ChoiceField(defaultOptions)
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
        new ChoiceField(
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
