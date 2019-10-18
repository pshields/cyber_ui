import {Component, Input, Output, EventEmitter} from '@angular/core';

import {CyberUiFormFieldComponentInterface} from '../defs/form_field_component';
import {CyberUiFormFieldEvent} from '../defs/form_field_event';

import {CyberUiFormFieldService} from '../service';

import {TextField} from './field';


@Component({
  selector: 'cyber-ui-text-field',
  templateUrl: 'component.html',
  styleUrls: ['component.scss'],
})
export class CyberUiTextFieldComponent implements CyberUiFormFieldComponentInterface {

  constructor(
    readonly service: CyberUiFormFieldService,
  ) {}

  @Input() field: TextField;

  @Input() model: {};

  @Output() event = new EventEmitter<CyberUiFormFieldEvent>();

  emitSaveAndReturnFalse() {
    this.event.emit({
      type: 'save'
    });
    return false;
  }
}
