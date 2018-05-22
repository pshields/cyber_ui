import {FormField} from '../form_field';
import {FormFieldConfig, FormFieldOptions} from '../form_field_config';
import {FormFieldElement} from '../form_field_element.enum';


export class BooleanFieldConfig extends FormFieldConfig {

  constructor(options: FormFieldOptions) {
    super(
      options,
      // This field type supports MAT_CHECKBOX and MAT_SLIDE_TOGGLE elements
      [
        FormFieldElement.MAT_CHECKBOX,
        FormFieldElement.MAT_SLIDE_TOGGLE,
      ],
      // The default UI element is MAT_CHECKBOX
      FormFieldElement.MAT_CHECKBOX
    );
  }

}

// This field type is for boolean values
// It also supports an initial `undefined` state
// Fields of this type are stored on the data model as true, false, or undefined
export class BooleanField<MODEL_T> extends FormField<MODEL_T, FormFieldOptions, BooleanFieldConfig> {
  constructor(options: FormFieldOptions) {
    super(options, BooleanFieldConfig);
  }
}
