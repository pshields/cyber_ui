import {Component, Input, Output, EventEmitter} from '@angular/core';

import {ChoiceField} from './field';


@Component({
  selector: 'cyber-ui-choice-field',
  templateUrl: 'component.html',
  styleUrls: ['component.scss'],
})
export class CyberUiChoiceFieldComponent {
  @Input() field: ChoiceField;

  @Input() model: {};

  @Output() change = new EventEmitter();

  @Output() save = new EventEmitter();
}
