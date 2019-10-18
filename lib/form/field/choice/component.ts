import {Component, Input, Output, EventEmitter} from '@angular/core';

import {CyberUiFormFieldComponentInterface} from '../defs/form_field_component';
import {CyberUiFormFieldEvent} from '../defs/form_field_event';

import {CyberUiFormFieldService} from '../service';

import {ChoiceField} from './field';


@Component({
  selector: 'cyber-ui-choice-field',
  templateUrl: 'component.html',
  styleUrls: ['component.scss'],
})
export class CyberUiChoiceFieldComponent implements CyberUiFormFieldComponentInterface {

  constructor(
    readonly service: CyberUiFormFieldService
  ) {}

  @Input() field: ChoiceField;

  @Input() model: {};

  @Output() event = new EventEmitter<CyberUiFormFieldEvent>();
}
