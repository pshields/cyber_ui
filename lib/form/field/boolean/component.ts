import {Component, Input, Output, EventEmitter} from '@angular/core';

import {FormFieldElement} from '../../form_field_element.enum';

import {CyberUiFormFieldService} from '../service';

import {BooleanField} from './field';


@Component({
  selector: 'cyber-ui-boolean-field',
  templateUrl: 'component.html',
  styleUrls: ['component.scss'],
})
export class CyberUiBooleanFieldComponent {

  readonly elements = FormFieldElement;

  constructor(
    readonly service: CyberUiFormFieldService
  ) {}

  @Input() field: BooleanField;

  @Input() model: {};

  @Output() change = new EventEmitter();

  @Output() save = new EventEmitter();
}
