import {Component, NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {fakeAsync, tick, ComponentFixture, TestBed} from '@angular/core/testing';
import {By} from '@angular/platform-browser';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';

import {CyberUiFormFieldModule} from '../field/form/module';
import {CyberUiBooleanFieldModule} from '../field/boolean/module';
import {CyberUiChoiceFieldModule} from '../field/choice/module';
import {CyberUiDiscreteProbabilityDistributionFieldModule} from '../field/discrete_probability_distribution/module';
import {CyberUiTextFieldModule} from '../field/text/module';
import {CyberUiUnimplementedFieldModule} from '../field/unimplemented/module';
import {CyberUiValueInNumericRangeFieldModule} from '../field/value_in_numeric_range/module';

import {FormField} from '../form_field';
import {FormFieldConfig, FormFieldOptions} from '../form_field_config';

import {CyberUiFormFieldsComponent} from './component';
import {CyberUiFormFieldsModule} from './module';


// Shared code used in each field template spec
export interface TestContext {
  component?: CyberUiFormFieldsComponent<{}>;
  harnessComponent?: FormFieldsTestHarnessComponent;
  fixture?: ComponentFixture<FormFieldsTestHarnessComponent>;
}

export function configureTestingModuleAndSetupContext(ctx: TestContext) {
  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      imports: [
        FormFieldsTestModule,
      ]
    }).compileComponents();
    tick();

    ctx.fixture = TestBed.createComponent(FormFieldsTestHarnessComponent);
    ctx.harnessComponent = ctx.fixture.componentInstance;
    ctx.component = ctx.fixture
                      .debugElement
                      .query(By.directive(CyberUiFormFieldsComponent))
                      .componentInstance;

  }));
}


describe('CyberUiFormFieldsComponent', () => {
  const ctx: TestContext = {};
  configureTestingModuleAndSetupContext(ctx);

  it('initializes', () => {
    expect(ctx.component instanceof CyberUiFormFieldsComponent).toBe(true);
  });

  // Each field template is tested separately in a template_specs/<field_name>.spec.ts file
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
  model = {
    test: 0,
  };
}


// This module exists to quiet warnings from the Angular language service
// See https://github.com/angular/angular/issues/13726#issuecomment-408788152
@NgModule({
  imports: [
    NoopAnimationsModule,
    FormsModule,
    CyberUiBooleanFieldModule,
    CyberUiChoiceFieldModule,
    CyberUiDiscreteProbabilityDistributionFieldModule,
    CyberUiFormFieldModule,
    CyberUiFormFieldsModule,
    CyberUiTextFieldModule,
    CyberUiUnimplementedFieldModule,
    CyberUiValueInNumericRangeFieldModule,
  ],
  declarations: [
    TestDialogComponent,
    FormFieldsTestHarnessComponent,
  ],
})
export class FormFieldsTestModule {}
