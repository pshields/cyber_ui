import {FormField} from '../../form_field';
import {FormFieldOptions, FormFieldConfig} from '../../form_field_config';


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
    super(options);
    this.fields = options.fields;
    this.contentTypeLabel = this.getContentTypeLabel(options.contentTypeLabel);
  }

  getContentTypeLabel(label?: string): string {
    return label || 'CHILD';
  }
}


// This field type is for when you need a list of field lists
export class FieldListListField<MODEL_T = {}> extends FormField<MODEL_T, FieldListListFieldOptions, FieldListListFieldConfig> {

  constructor(options: FieldListListFieldOptions) {
    super(options, FieldListListFieldConfig);
  }

}
