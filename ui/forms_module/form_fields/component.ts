import {Component, EventEmitter, Input, Output} from '@angular/core';
import {NgForm} from '@angular/forms';

import {MatDialog} from '@angular/material';

import {FormField} from '../form_field';
import {FormFieldOptions, FormFieldConfig} from '../form_field_config';
import {FormFieldElement} from '../form_field_element.enum';


@Component({
  selector: 'cyber-ui-form-fields',
  templateUrl: 'component.html',
  styleUrls: ['component.scss'],
})
export class CyberUiFormFieldsComponent<MODEL_T> {
  constructor(public dialog: MatDialog) {}

  // The model object to render the form fields for
  @Input() model: MODEL_T;

  // Optional. The list of fields to display.
  // If not provided, the component will look for a `fields` property on the model or the model's constructor.
  @Input() fields: FormField<MODEL_T, FormFieldOptions, FormFieldConfig>[];

  // Stream of change actions. If the any fields' model has changed, an event will be emitted.
  @Output() change: EventEmitter<void> = new EventEmitter();

  // Stream of save actions. If the model should be saved, an event will be emitted.
  @Output() save: EventEmitter<void> = new EventEmitter();

  // Expose the FormFieldElement enum to the template for use in comparisons
  readonly elements = FormFieldElement;

  openHelpDialog(cmp: any) {
    this.dialog.open(cmp);
  }
}
