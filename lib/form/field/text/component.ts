import {Component, Input, Output, EventEmitter} from '@angular/core';

import {CyberUiFormFieldComponentInterface} from '../defs/form_field_component';

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

  @Output() change = new EventEmitter();

  @Output() save = new EventEmitter();

  emitSaveAndReturnFalse() {
    this.save.emit();
    return false;
  }
}
