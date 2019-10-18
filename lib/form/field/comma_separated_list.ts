import {CyberUiFormModel} from '../defs/form_model';

import {TextField} from './text/field';


// Represents a list of string values
// Shown in the UI as a comma-separated, user-editable list
// Note: on the data model, this field is stored as a string[]
export class CommaSeparatedListField<MODEL_T extends CyberUiFormModel> extends TextField<MODEL_T> {

  // Since this field is stored on the model as a string[], we need to provide a custom
  // getNgModelBoundValue implementation which serializes the field value to a string
  getNgModelBoundValue(model: MODEL_T): string {
    // If the bound value is undefined, serialize the result to an empty string
    // This avoid the error of calling .join(...) on undefined
    // TODO Write a test that this field initializes correctly when the property is initially undefined
    if (this.getModelProperty(model, this.config.propertyName) === undefined) {
      return '';
    } else {
      return (this.getModelProperty(model, this.config.propertyName) as string[]).join(', ');
    }
  }

  // ngModel change handler to save the corresponding string[] onto the data model
  // @param `newValue` is the new value, shown in the UI, which triggered the change
  boundValueChangeHandler(model: MODEL_T, newValue: string) {
    this.setModelProperty(
      model,
      this.config.propertyName,
      newValue.split(',')
        // trim left and right space from items
        .map(tag => tag.trim())
        // filter out item that are empty post-trim
        .filter(tag => tag.length > 0)
    );
  }
}
