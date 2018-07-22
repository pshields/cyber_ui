import {TextField} from './text';


// Represents a list of string values
// Shown in the UI as a comma-separated, user-editable list
// Note: on the data model, this field is stored as a string[]
export class CommaSeparatedListField<MODEL_T> extends TextField<MODEL_T> {

  // Since this field is stored on the model as a string[], we need to provide a custom
  // getNgModelBoundValue implementation which serializes the field value to a string
  getNgModelBoundValue(model: MODEL_T): string {
    return model[this.config.propertyName].join(', ');
  }

  // ngModel change handler to save the corresponding string[] onto the data model
  // @param `newValue` is the new value, shown in the UI, which triggered the change
  boundValueChangeHandler(model: MODEL_T, newValue: string) {
    model[this.config.propertyName] = newValue.split(',')
                                         // trim left and right space from items
                                         .map(tag => tag.trim())
                                         // filter out item that are empty post-trim
                                         .filter(tag => tag.length > 0);
  }
}
