import {Component, Input, Output, EventEmitter} from '@angular/core';

import {TextField} from '../field/text';


@Component({
  selector: 'cyber-ui-text-field',
  templateUrl: 'component.html',
  styleUrls: ['component.scss'],
})
export class CyberUiTextFieldComponent {
  @Input() field: TextField;

  @Input() model: {};

  @Output() change = new EventEmitter();

  @Output() save = new EventEmitter();

  emitSaveAndReturnFalse() {
    this.save.emit();
    return false;
  }
}
