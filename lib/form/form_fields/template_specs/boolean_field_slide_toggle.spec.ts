import {NgModel} from '@angular/forms';
import {async, fakeAsync, tick} from '@angular/core/testing';
import {By} from '@angular/platform-browser';

import {MatCheckbox} from '@angular/material/checkbox';
import {MatSlideToggle} from '@angular/material/slide-toggle';

import {BooleanFieldOptions, BooleanField} from '../../field/boolean/field';

import {configureTestingModuleAndSetupContext, TestContext, TestDialogComponent} from '../component.spec';


describe('BooleanField slide toggle template', () => {
  const ctx: TestContext = {};
  configureTestingModuleAndSetupContext(ctx);

  const defaultOptions: BooleanFieldOptions = {
    label: 'Test',
    propertyName: 'test',
    element: 'mat-slide-toggle',
  };

  it('uses a slide toggle', fakeAsync(() => {
    ctx.harnessComponent.fields = [
      new BooleanField(defaultOptions)
    ];
    ctx.fixture.detectChanges();
    tick();
    expect(ctx.fixture.debugElement.query(By.directive(MatCheckbox))).toBeNull();
    expect(ctx.fixture.debugElement.query(By.directive(MatSlideToggle))).not.toBeNull();
  }));

  describe('when the user initiates a change', () => {
    let eventEmissions = [];

    beforeEach(async(() => {
      eventEmissions = [];
      ctx.harnessComponent.fields = [
        new BooleanField(defaultOptions)
      ];
      ctx.fixture.detectChanges();
    }));

    beforeEach(async(() => {
      ctx.component.event.subscribe(event => eventEmissions.push(event));
      // Simulate a change event
      const inputDebugEl = ctx.fixture.debugElement.query(By.directive(NgModel));
      inputDebugEl.injector.get(NgModel).control.setValue(false);
    }));

    it('emits a change event', () => {
      expect(eventEmissions.length).toEqual(1);
      expect(eventEmissions[0].type).toEqual('change');
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
