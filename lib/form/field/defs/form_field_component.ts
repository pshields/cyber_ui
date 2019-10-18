import {EventEmitter} from '@angular/core';

import {CyberUiLiteralModel} from '../../../model/interfaces/literal_model';
import {CyberUiInteractiveModel} from '../../../model/interfaces/interactive_model';

import {FormField} from '../../form_field';

import {CyberUiFormFieldEvent} from './form_field_event';


export interface CyberUiFormFieldComponentInterface<
  FORM_FIELD_T extends FormField = FormField,
  MODEL_T extends (CyberUiInteractiveModel|CyberUiLiteralModel) = {},
> {
  field: FORM_FIELD_T;
  model: MODEL_T;
  event: EventEmitter<CyberUiFormFieldEvent>;
}
