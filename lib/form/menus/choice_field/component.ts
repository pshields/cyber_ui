import {Component, ViewChild, Input, Output, EventEmitter} from '@angular/core';

import {MatMenuTrigger} from '@angular/material/menu';

import {CyberUiFormModel} from '../../defs/form_model';

import {ChoiceField, Option} from '../../field/choice/field';


@Component({
  templateUrl: './component.html',
  styleUrls: ['./component.scss'],
})
export class CyberUiChoiceFieldMenuComponent {
  // The field to show in a menu
  @Input() field: ChoiceField;
  // The data model to manipulate
  @Input() model: CyberUiFormModel;
  // A stream of clear events for the containing component to listen to
  @Output() clear: EventEmitter<void> = new EventEmitter();
  // The menu trigger, to be called by the component that creates this component
  @ViewChild('trigger', {read: MatMenuTrigger, static: true}) trigger: MatMenuTrigger;

  // TODO Test that this method works whether the model is a POJO or a CyberUiInteractiveModel
  choose(option: Option) {
    this.field.setModelProperty(this.model, this.field.config.propertyName, option.value);
  }
}
