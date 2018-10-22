import {FormField} from '../form_field';
import {FormFieldOptions, FormFieldConfig} from '../form_field_config';
import {FormFieldElement} from '../form_field_element.enum';


export interface FieldListListFieldOptions extends FormFieldOptions {
  // The list of fields to show
  fields: FormField[];
}


export class FieldListListFieldConfig extends FormFieldConfig {
  fields: FormField[];

  constructor(options: FieldListListFieldOptions) {
    super(
      options,
      // Supported elements for this field type are CYBER_UI_FORM_FIELDS_LIST
      [FormFieldElement.CYBER_UI_FORM_FIELDS_LIST],
      // The default UI element for this field type is CYBER_UI_FORM_FIELDS_LIST
      FormFieldElement.CYBER_UI_FORM_FIELDS_LIST,
    );
    this.fields = options.fields;
    console.log(this);
  }
}


// This field type is for when you need a list of field lists
export class FieldListListField<MODEL_T = {}> extends FormField<MODEL_T, FormFieldOptions, FormFieldConfig> {

  constructor(options: FieldListListFieldOptions) {
    super(options, FieldListListFieldConfig);
  }

}
