import {ChangeDetectorRef, Component, Input, Output, EventEmitter} from '@angular/core';

import {CyberUiFormFieldComponentInterface} from '../defs/form_field_component';

import {CyberUiFormFieldService} from '../service';

import {FieldListListField} from './field';


@Component({
  selector: 'cyber-ui-field-list-list-field',
  templateUrl: 'component.html',
  styleUrls: ['component.scss'],
})
export class CyberUiFieldListListFieldComponent implements CyberUiFormFieldComponentInterface {

  constructor(
    readonly changeDetectorRef: ChangeDetectorRef,
    readonly service: CyberUiFormFieldService,
  ) {}

  @Input() field: FieldListListField;

  @Input() model: {};

  @Output() change = new EventEmitter();

  @Output() save = new EventEmitter();

}
