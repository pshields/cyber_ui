import {CyberUiInteractiveModel} from '../model/interfaces/interactive_model';
import {CyberUiLiteralModel} from '../model/interfaces/literal_model';

import {FormFieldConfig, FormFieldOptions} from './form_field_config';


// The base form field class
// It's expected that consumers will use subclasses of this class (e.g. TextField, BooleanField)
// rather than using this class directly
// For a list of subclasses, see the `fields` subdirectory

export class FormField<
    // @ts-ignore: MODEL_T is not used on the base class for now, but might be in the future
    MODEL_T extends (CyberUiInteractiveModel|CyberUiLiteralModel) = {},
    OPTIONS_T extends FormFieldOptions = FormFieldOptions,
    CONFIG_T extends FormFieldConfig = FormFieldConfig
  > {
  // All field config is stored on an immutable config object in order to cache properties used in templates
  // If you need to modify the config, just create a new FormField object with the updated options
  readonly config: CONFIG_T;

  constructor(
      options: OPTIONS_T,
      configConstructorCls: new(options: OPTIONS_T) => CONFIG_T
    ) {
      this.config = new configConstructorCls(options);
  }

  // Formats a field value as a string
  // Can be overridden by subclasses of FormField
  format(value: any) {
    if (value === undefined) {
      return 'None';
    } else {
      return value.toString();
    }
  }

  // Utility function to get a model property
  getModelProperty(model: MODEL_T, propertyName: string) {
    if ('getProperty' in model) {
      // If the model implements getProperty(), use that
      return (model as CyberUiInteractiveModel).getProperty(propertyName);
    } else {
      // Otherwise, assume this is a simple literal object model
      return model[propertyName];
    }
  }

  setModelProperty(model: MODEL_T, propertyName: string, value: {}) {
    if ('setProperty' in model) {
      // If the model implements setProperty(), use that
      return (model as CyberUiInteractiveModel).setProperty(propertyName, value);
    } else {
      // Otherwise, assume this is a simple literal object model
      model[propertyName] = value;
    }
  }
}
