import {Component, ViewChild, Input, Output, EventEmitter} from '@angular/core';
import {MatMenuTrigger} from '@angular/material';

import {ChoiceField, Option} from '../../fields/choice';


@Component({
  templateUrl: './component.html',
  styleUrls: ['./component.scss'],
})
export class CyberUiChoiceFieldMenuComponent {
  // The field to show in a menu
  @Input() field: ChoiceField;
  // The data model to manipulate
  @Input() model: {};
  // A stream of clear events for the containing component to listen to
  @Output() clear: EventEmitter<void> = new EventEmitter();
  // The menu trigger, to be called by the component that creates this component
  @ViewChild('trigger', {read: MatMenuTrigger}) trigger: MatMenuTrigger;

  choose(option: Option) {
    this.model[this.field.config.propertyName] = option.value;
  }
}
