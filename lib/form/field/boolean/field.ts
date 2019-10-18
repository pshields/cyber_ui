import {FormField} from '../../form_field';
import {FormFieldConfig, FormFieldOptions} from '../../form_field_config';
import {FormFieldElement} from '../../form_field_element.enum';


const DEFAULT_ELEMENT = FormFieldElement.MAT_CHECKBOX;


export interface BooleanFieldOptions extends FormFieldOptions {
  // Which element type to use to render this field
  element?: FormFieldElement;
}


export class BooleanFieldConfig extends FormFieldConfig {
  readonly element: FormFieldElement;

  constructor(options: BooleanFieldOptions) {
    super(options);
    this.element = this.getElement(options);
  }

  getElement(options: BooleanFieldOptions) {
    return options.element || DEFAULT_ELEMENT;
  }

}

// This field type is for boolean values
// It also supports an initial `undefined` state
// Fields of this type are stored on the data model as true, false, or undefined
export class BooleanField<MODEL_T = {}> extends FormField<MODEL_T, FormFieldOptions, BooleanFieldConfig> {
  constructor(options: BooleanFieldOptions) {
    super(options, BooleanFieldConfig);
  }
}
