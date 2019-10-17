import {Component, Input, Output, EventEmitter} from '@angular/core';

import {CyberUiFormFieldService} from '../service';

import {ValueInNumericRangeField} from './field';


@Component({
  selector: 'cyber-ui-value-in-numeric-range-field',
  templateUrl: 'component.html',
  styleUrls: ['component.scss'],
})
export class CyberUiValueInNumericRangeFieldComponent {

  constructor(
    readonly service: CyberUiFormFieldService
  ) {}

  @Input() field: ValueInNumericRangeField;

  @Input() model: {};

  @Output() change = new EventEmitter();

  @Output() save = new EventEmitter();

}
