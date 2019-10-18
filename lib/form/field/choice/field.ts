import {FormField} from '../../form_field';
import {FormFieldOptions, FormFieldConfig} from '../../form_field_config';


// Class for representing an option in the list of options for ChoiceField
export class Option<VALUE_T = {}> {
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
    super(options);
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
export class ChoiceField<MODEL_T = {}, OPTION_VALUE_T = {}> extends FormField<MODEL_T, FormFieldOptions, ChoiceFieldConfig<OPTION_VALUE_T>> {

  constructor(options: ChoiceFieldOptions<OPTION_VALUE_T>) {
    super(options, ChoiceFieldConfig);
  }

  // When displaying the value as a string, use the option's corresponding label
  format(value: any) {
    if (value === undefined) {
      return 'None';
    } else {
      const correspondingOption = this.config.options.find(option => option.value === value);
      if (correspondingOption) {
        return correspondingOption.label;
      } else {
        // TODO Log an error in some uniform way here
        return '[ERROR - COULD NOT RESOLVE VALUE]';
      }
    }
  }

}

