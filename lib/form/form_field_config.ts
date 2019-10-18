import {ComponentType} from '@angular/cdk/portal';

import {CyberUiFormFieldComponentInterface} from './field/defs/form_field_component';


// FormFieldConfig provides a standard way to construct and access form field configuration.
// It also handles setting the default values appropriately when params are omitted.

// This interface defines the type of the argument that must be provided to the FormFieldConfig constructor.
// This exists for typing purposes. For explanations of each field, see where they are defined in FormFieldConfig.
export interface FormFieldOptions {
  label: string;
  propertyName: string;
  required?: boolean;
  autofocus?: boolean;
  helpText?: string;
  helpDialog?: ComponentType<unknown>;
  component?: ComponentType<CyberUiFormFieldComponentInterface>;
}


export class FormFieldConfig {
  // The user-visible label for this field
  readonly label: string;
  // The property name at which to store this field on the data model
  readonly propertyName: string;
  // Whether or not this field is considered required on forms where it is present
  readonly required: boolean;
  // Whether or not this field should be focused when the form is displayed
  // At most one field in a form should have this set to true
  // Note that this functionality only works when the user's browser is already in focus
  readonly autofocus: boolean;
  // Help text to show to the user if they need more of an explanation
  readonly helpText: string|undefined;
  // Component to show in a dialog if they need more of an explanation
  // This is a more comprehensive alternative to helpText
  readonly helpDialog: ComponentType<unknown>|undefined;
  // The component to use to render this field
  // There are other mechanisms to correlate field types to components at runtime,
  // in a dynamic fashion. Specifying this option overrides those other mechanisms.
  readonly component: ComponentType<CyberUiFormFieldComponentInterface>|undefined;

  constructor(
    options: FormFieldOptions,
  ) {
    this.label = options.label;
    this.propertyName = options.propertyName;
    this.required = this.getRequired(options.required);
    this.autofocus = this.getAutofocus(options.autofocus);
    this.helpText = options.helpText;
    this.helpDialog = options.helpDialog;
    this.component = options.component;
  }

  private getRequired(required: boolean|undefined) {
    if (required !== undefined) {
      return required;
    } else {
      return false;
    }
  }

  private getAutofocus(autofocus: boolean|undefined) {
    if (autofocus !== undefined) {
      return autofocus;
    } else {
      return false;
    }
  }

}
