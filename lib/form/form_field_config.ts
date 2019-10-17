import {ComponentType} from '@angular/cdk/portal';

import {FormFieldElement} from './form_field_element.enum';


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
  // Consumers may specify a preference for which underlying UI element should be used,
  // but be warned that most field types support only one or a small number of elements.
  // If an unsupported element is requested for a given field, an error will be logged to
  // the console, and the default element for that field type will be used instead.
  element?: FormFieldElement;
}


export class FormFieldConfig {
  // The UI elements supported by this config
  // Subclasses may define their own custom set of supported elements

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
  // Computed property: whether to show this field inside of a mat-form-field
  readonly useMatFormField: boolean;
  // Computed property: the underlying element or component powering this field
  readonly element: FormFieldElement;

  constructor(
      options: FormFieldOptions,
      supportedElements: FormFieldElement[],
      defaultElement: FormFieldElement,
    ) {
      this.label = options.label;
      this.propertyName = options.propertyName;
      this.element = this.getElement(options.element, supportedElements, defaultElement);
      this.required = this.getRequired(options.required);
      this.autofocus = this.getAutofocus(options.autofocus);
      this.helpText = options.helpText;
      this.helpDialog = options.helpDialog;
      this.useMatFormField = this.getUseMatFormField();
  }

  protected getElement(
    preference: FormFieldElement|undefined,
    supported: FormFieldElement[],
    defaultElement: FormFieldElement
  ): FormFieldElement {
    if (preference !== undefined) {
      if (supported.indexOf(preference) === -1) {
        console.error(
          `Requested element`, FormFieldElement[preference],
          `is not supported by this field type; supported elements are:`,
          supported.map(el => FormFieldElement[el]),
          `; proceeding with default element`, FormFieldElement[defaultElement]
        );
        return defaultElement;
      } else {
        return preference;
      }
    }
    // No preference was given, so use the default element for this field type
    return defaultElement;
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

  // Logic to determine whether to use a mat-form-field component in the template or not
  // Since the config is immutable, the returned value can be cached on the config
  private getUseMatFormField() {
    // TODO Return true only if input el or select el or textarea el
    // TODO Test this method is doing the right thing
    return (
      this.element === FormFieldElement.TEXTAREA ||
      this.element === FormFieldElement.SELECT
    );
  }
}
