import {Component} from '@angular/core';
import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {By} from '@angular/platform-browser';

import {CyberUiFormsModule} from '../module';
import {FormField} from '../form_field';
import {FormFieldConfig, FormFieldOptions} from '../form_field_config';
import {ValueInNumericRangeField} from '../fields/value_in_numeric_range';

import {CyberUiFormFieldsComponent} from './component';


describe('CyberUiFormFieldsComponent', () => {
  let component: CyberUiFormFieldsComponent<{}>;
  let harnessComponent: FormFieldsTestHarnessComponent;
  let fixture: ComponentFixture<FormFieldsTestHarnessComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [CyberUiFormsModule],
      declarations: [FormFieldsTestHarnessComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormFieldsTestHarnessComponent);
    harnessComponent = fixture.componentInstance;
    component = fixture.debugElement.query(By.directive(CyberUiFormFieldsComponent)).componentInstance;
  });

  it('initializes', () => {
    expect(component instanceof CyberUiFormFieldsComponent).toBe(true);
  });

  describe('ValueInNumericRangeField template', () => {
    // TODO Add helpDialog test for the remaining element types / templates

    const defaultOptions = {
      label: 'Test',
      propertyName: 'test',
      minValue: 0,
      maxValue: 10,
      step: 1,
      helpDialog: TestDialogComponent
    };

    describe('when not configured to show a help dialog', () => {

      beforeEach(async(() => {
        harnessComponent.fields = [
          new ValueInNumericRangeField(defaultOptions)
        ];
        fixture.detectChanges();
      }));

      it('does not show a help dialog', () => {
        const iconNamesPresentInComponent = Array
          .from(fixture.debugElement.nativeElement.querySelectorAll('mat-icon'))
          .map((el: HTMLElement) => el.innerText);
        expect(iconNamesPresentInComponent).not.toContain('help');
      });
    });

    describe('when configured to show a help dialog', () => {
      // This behavior is activated by the presence of `helpDialog` in the provided ValueInNumericRangeFieldOptions

      beforeEach(async(() => {
        harnessComponent.fields = [
          new ValueInNumericRangeField(
            Object.assign({}, defaultOptions, {helpDialog: TestDialogComponent})
          )
        ];
        fixture.detectChanges();
      }));

      it('shows a help button that brings up the help dialog', () => {
        const iconNamesPresentInComponent = Array
          .from(fixture.debugElement.nativeElement.querySelectorAll('mat-icon'))
          .map((el: HTMLElement) => el.innerText);
        expect(iconNamesPresentInComponent).toContain('help');
        // TODO Expect clicking on the button to open a dialog containing TestDialogComponent
      });
    });
  });
});


@Component({
  template: 'Content to be shown in a dialog'
})
export class TestDialogComponent {}


@Component({
  template: `<cyber-ui-form-fields [fields]=fields [model]="model"></cyber-ui-form-fields>`
})
export class FormFieldsTestHarnessComponent {
  fields: FormField<{}, FormFieldOptions, FormFieldConfig>[] = [];
  model = {};
}
