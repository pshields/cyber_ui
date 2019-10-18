import {Component, Input, Output, EventEmitter, OnInit} from '@angular/core';

import {FormField} from '../../form_field';

import {CyberUiFormFieldComponentInterface} from '../defs/form_field_component';
import {CyberUiFormFieldEvent} from '../defs/form_field_event';


// A placeholder component to use when a form field type does not have a corresponding component
@Component({
  template: 'UNIMPLEMENTED FIELD',
})
export class CyberUiUnimplementedFieldComponent implements CyberUiFormFieldComponentInterface, OnInit {
  @Input() field: FormField;
  @Input() model: {};
  @Output() event = new EventEmitter<CyberUiFormFieldEvent>();

  ngOnInit() {
    console.warn(
      `CyberUiUnimplementedFieldComponent initialized for field`,
      this.field,
      `. Register a component for this field type in CyberUiFormFieldComponentResolver.`
    );
  }
}
