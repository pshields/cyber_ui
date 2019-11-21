import {Component, Input, Output, EventEmitter} from '@angular/core';

import {CyberUiFormFieldComponentInterface} from '../defs/form_field_component';
import {CyberUiFormFieldEvent} from '../defs/form_field_event';

import {CyberUiFormFieldService} from '../service';

import {ValueInNumericRangeField} from './field';


@Component({
  selector: 'cyber-ui-value-in-numeric-range-field',
  templateUrl: 'component.html',
  styleUrls: ['component.scss'],
})
export class CyberUiValueInNumericRangeFieldComponent implements CyberUiFormFieldComponentInterface {

  constructor(
    readonly service: CyberUiFormFieldService
  ) {}

  @Input() field: ValueInNumericRangeField;

  @Input() model: {};

  @Output() event = new EventEmitter<CyberUiFormFieldEvent>();

  emitSaveAndReturnFalse() {
    this.event.emit({
      type: 'save'
    });
    return false;
  }
}
