import {Component} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {fakeAsync, tick, ComponentFixture, TestBed} from '@angular/core/testing';
import {By} from '@angular/platform-browser';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';

import {CyberUiFormFieldsModule} from './module';
import {FormField} from '../form_field';
import {FormFieldConfig, FormFieldOptions} from '../form_field_config';

import {CyberUiFormFieldsComponent} from './component';


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
        NoopAnimationsModule,
        FormsModule,
        CyberUiFormFieldsModule
      ],
      declarations: [FormFieldsTestHarnessComponent],
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
