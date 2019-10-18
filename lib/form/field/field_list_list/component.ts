import {ChangeDetectorRef, Component, Input, Output, EventEmitter} from '@angular/core';

import {CyberUiFormFieldComponentInterface} from '../defs/form_field_component';
import {CyberUiFormFieldEvent} from '../defs/form_field_event';

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

  @Output() event = new EventEmitter<CyberUiFormFieldEvent>();

  addRecord() {
    const records = this.field.getModelProperty(this.model, this.field.config.propertyName) || [];
    records.push({});
    this.field.setModelProperty(this.model, this.field.config.propertyName, records);
    this.changeDetectorRef.detectChanges();
    this.event.emit({type: 'change'});
  }

}
