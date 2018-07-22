import {FormField} from '../form_field';
import {FormFieldOptions, FormFieldConfig} from '../form_field_config';
import {FormFieldElement} from '../form_field_element.enum';


// Class for representing an option in the list of options for ChoiceField
export class Option<VALUE_T> {
  constructor(
      public label: string,
      public value: VALUE_T
  ) {}
}


export interface ChoiceFieldOptions<OPTION_VALUE_T> extends FormFieldOptions {
    // The list of options to show to the user
    options: Option<OPTION_VALUE_T>[];
    // Whether this field is a multiple-select field (default: false)
    multiple?: boolean;
}


export class ChoiceFieldConfig<OPTION_VALUE_T> extends FormFieldConfig {
  options: Option<OPTION_VALUE_T>[];
  multiple: boolean;

  constructor(options: ChoiceFieldOptions<OPTION_VALUE_T>) {
    super(
      options,
      // Supported elements for this field type are SELECT
      [FormFieldElement.SELECT],
      // The default UI element for this field type is SELECT
      FormFieldElement.SELECT
    );
    this.options = options.options;
    this.multiple = this.getMultiple(options.multiple);
  }

  getMultiple(multiple: boolean | undefined): boolean {
    if (multiple !== undefined) {
      return multiple;
    } else {
      return false;
    }
  }
}


// This field type for representing a choice from a discrete set of options
// The model's value will be whatever the underying selected option's value is
export class ChoiceField<MODEL_T, OPTION_VALUE_T> extends FormField<MODEL_T, FormFieldOptions, ChoiceFieldConfig<OPTION_VALUE_T>> {

  constructor(options: ChoiceFieldOptions<OPTION_VALUE_T>) {
    super(options, ChoiceFieldConfig);
  }

}

