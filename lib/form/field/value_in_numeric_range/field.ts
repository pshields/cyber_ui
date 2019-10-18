import {FormField} from '../../form_field';

import {FormFieldOptions, FormFieldConfig} from '../../form_field_config';


export interface ValueInNumericRangeFieldOptions extends FormFieldOptions {
  // Consumers must provide a min and max value for the range
  minValue: number;
  maxValue: number;
  // The rest of the options are optional and have reasonable defaults defined in ValueInNumericRangeConfig
  step?: number;
  digitsinfo?: string;
}


export class ValueInNumericRangeFieldConfig extends FormFieldConfig {
  minValue: number;
  maxValue: number;
  // The step size to use when incrementing / decrementing the value
  step: number|undefined;
  // Format string to pass to Angular's DecimalPipe (https://angular.io/api/common/DecimalPipe#parameters)
  digitsinfo: string|undefined;

  constructor(options: ValueInNumericRangeFieldOptions) {
    super(options);
    this.minValue = options.minValue;
    this.maxValue = options.maxValue;
    this.step = options.step;
    this.digitsinfo = options.digitsinfo;
  }
}


export class ValueInNumericRangeField<MODEL_T = {}> extends FormField<MODEL_T, ValueInNumericRangeFieldOptions, ValueInNumericRangeFieldConfig> {
  constructor(options: ValueInNumericRangeFieldOptions) {
    super(options, ValueInNumericRangeFieldConfig);
  }
}
