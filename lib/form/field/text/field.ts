import {CyberUiFormModel} from '../../defs/form_model';

import {FormField} from '../../form_field';
import {FormFieldOptions, FormFieldConfig} from '../../form_field_config';


export interface TextFieldOptions extends FormFieldOptions {
  saveOnEnter?: boolean;
}


export class TextFieldConfig extends FormFieldConfig {
  // Whether an Enter keypress on this field should emit a form save event
  // If true, the Enter keypress will be intercepted, so the newline will
  // *not* be included in the text field's value
  // Users can still achieve newlines in textareas in this scenario with
  // Shift+Enter
  saveOnEnter: boolean;

  constructor(options: TextFieldOptions) {
    super(options);
    this.saveOnEnter = this.getSaveOnEnter(options.saveOnEnter);
  }

  getSaveOnEnter(saveOnEnter: boolean|undefined): boolean {
    if (saveOnEnter !== undefined) {
      return saveOnEnter;
    } else {
      return false;
    }
  }
}


// This field type is for various text such as labels or notes
// Other fields may subclass this field and provide alternate representations on the data model
// e.g. CommaSeparatedListField subclasses TextField and stores itself as a string[] on the model
export class TextField<MODEL_T extends CyberUiFormModel = {}> extends FormField<MODEL_T, TextFieldOptions, TextFieldConfig> {

  constructor(options: TextFieldOptions) {
    super(options, TextFieldConfig);
  }

  // Returns the string value to bind to ngModel in the template
  // Can be overridden in subclasses to perform additional logic
  getNgModelBoundValue(model: MODEL_T): string {
    return this.getModelProperty(model, this.config.propertyName);
  }

  // ngModel change handler to save the UI value into the proper format on the data model
  // @param `newValue` is the new value, shown in the UI, which triggered the change
  // Can be overridden in sublasses to deserialize the new value into a custom representation
  boundValueChangeHandler(model: MODEL_T, newValue: string) {
    this.setModelProperty(model, this.config.propertyName, newValue);
  }
}
