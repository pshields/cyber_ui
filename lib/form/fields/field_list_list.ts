import {FormField} from '../form_field';
import {FormFieldOptions, FormFieldConfig} from '../form_field_config';
import {FormFieldElement} from '../form_field_element.enum';


export interface FieldListListFieldOptions extends FormFieldOptions {
  // The list of fields to show
  fields: FormField[];
  // The content type label to use for this field list
  // This setting will be used to determine the button label for adding a new record
  // e.g. if contentTypeLabel is 'SUBTASK', the button label will be 'ADD SUBTASK'
  // Default: 'CHILD'
  contentTypeLabel?: string;
}


export class FieldListListFieldConfig extends FormFieldConfig {
  fields: FormField[];
  contentTypeLabel: string;

  constructor(options: FieldListListFieldOptions) {
    super(
      options,
      // Supported elements for this field type are CYBER_UI_FORM_FIELDS_LIST
      [FormFieldElement.CYBER_UI_FORM_FIELDS_LIST],
      // The default UI element for this field type is CYBER_UI_FORM_FIELDS_LIST
      FormFieldElement.CYBER_UI_FORM_FIELDS_LIST,
    );
    this.fields = options.fields;
    this.contentTypeLabel = this.getContentTypeLabel(options.contentTypeLabel);
  }

  getContentTypeLabel(label?: string): string {
    return label || 'CHILD';
  }
}


// This field type is for when you need a list of field lists
export class FieldListListField<MODEL_T = {}> extends FormField<MODEL_T, FormFieldOptions, FormFieldConfig> {

  constructor(options: FieldListListFieldOptions) {
    super(options, FieldListListFieldConfig);
  }

}
