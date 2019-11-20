import {Component, Input, Output, EventEmitter} from '@angular/core';

import {CyberUiFormFieldComponentInterface} from '../defs/form_field_component';
import {CyberUiFormFieldEvent} from '../defs/form_field_event';

import {CyberUiFormFieldService} from '../service';

import {ChoiceField, Option} from './field';


@Component({
  selector: 'cyber-ui-choice-field',
  templateUrl: 'component.html',
  styleUrls: ['component.scss'],
})
export class CyberUiChoiceFieldComponent implements CyberUiFormFieldComponentInterface {

  constructor(readonly service: CyberUiFormFieldService) {}

  @Input() field: ChoiceField;

  @Input() model: {};

  @Output() event = new EventEmitter<CyberUiFormFieldEvent>();

  unrolledMultipleIsChecked(option: Option) {
    const fieldValue = this.field.getModelProperty(this.model, this.field.config.propertyName);
    return fieldValue && fieldValue instanceof Array && fieldValue.includes(option.value);
  }

  unrolledMultipleToggle(option: Option) {
    let fieldValue = this.field.getModelProperty(this.model, this.field.config.propertyName);
    if (fieldValue === undefined) {
      fieldValue = [];
    }
    if (fieldValue.includes(option.value)) {
      fieldValue.splice(fieldValue.indexOf(option.value), 1);
    } else {
      fieldValue.push(option.value);
    }
    this.field.setModelProperty(this.model, this.field.config.propertyName, fieldValue);
    this.event.emit({type: 'change'});
  }
}
