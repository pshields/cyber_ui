import {Component, EventEmitter, Input, Output, ChangeDetectionStrategy} from '@angular/core';

import {filter} from 'rxjs/operators';

import {CyberUiFormFieldEvent} from '../field/defs/form_field_event';

import {CyberUiFormModel} from '../defs/form_model';

import {CyberUiFormFieldService} from '../field/service';

import {FormField} from '../form_field';


@Component({
  selector: 'cyber-ui-form-fields',
  templateUrl: 'component.html',
  styleUrls: ['component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CyberUiFormFieldsComponent<MODEL_T extends CyberUiFormModel> {

  constructor(
    readonly service: CyberUiFormFieldService,
  ) {}

  // The model object to render the form fields for
  @Input() model: MODEL_T;

  // The list of fields to display.
  // Because cyber-ui-form-fields uses OnPush change detection, if the array
  // is altered, changes will not necessarily be detected. A new array would
  // need to be received for changes to be detected via this input.
  @Input() fields: FormField<MODEL_T>[];

  // Stream of events from the fields in this form
  @Output() event = new EventEmitter<CyberUiFormFieldEvent>();

  // For convenience, expose filtered event streams for 'save' and 'change' events
  @Output() change = this.event.pipe(filter(event => event.type === 'change'));
  @Output() save = this.event.pipe(filter(event => event.type === 'save'));

}
