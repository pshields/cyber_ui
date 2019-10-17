import {Component, Input, Output, EventEmitter} from '@angular/core';

import {CyberUiFormFieldService} from '../service';

import {ChoiceField} from './field';


@Component({
  selector: 'cyber-ui-choice-field',
  templateUrl: 'component.html',
  styleUrls: ['component.scss'],
})
export class CyberUiChoiceFieldComponent {

  constructor(
    readonly service: CyberUiFormFieldService
  ) {}

  @Input() field: ChoiceField;

  @Input() model: {};

  @Output() change = new EventEmitter();

  @Output() save = new EventEmitter();
}
