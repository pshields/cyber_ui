import {Component, EventEmitter, Input, Output, ChangeDetectionStrategy} from '@angular/core';

import {Observable} from 'rxjs';
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

  // The preferred way to provide fields to this component is as an observable
  // This naturally supports dynamic fields lists that change over time
  @Input() fieldsObs: Observable<FormField<MODEL_T>[]>;

  // Optional. A static list of fields to display.
  // Because cyber-ui-form-fields uses OnPush change detection, if the array
  // is altered, changes will not necessarily be detected. A new array would
  // need to be received for changes to be detected via this input.
  @Input() fields: FormField<MODEL_T>[];

  // If only a single field is to be used, it may be provided via this input
  // TODO Deprecate this input; users should switch to cyber-ui-form-field
  @Input() field: FormField<MODEL_T>;

  // Stream of events from the fields in this form
  @Output() event = new EventEmitter<CyberUiFormFieldEvent>();

  // For convenience, expose filtered event streams for 'save' and 'change' events
  @Output() change = this.event.pipe(filter(event => event.type === 'change'));
  @Output() save = this.event.pipe(filter(event => event.type === 'save'));

  // cyber-ui-form-fields looks for fields in the following order:
  // 1) 'fieldsObs' (if provided and has returned a non-empty value)
  // 2) 'fields' (if provided and non-empty)
  // 3) 'field' (if non-empty)
  // 4) model.fields (if defined and non-empty)
  // 5) model.constructor.fields (if defined and non-empty)
  getFields() {
    return (
      this.fields ||
      (this.field && [this.field]) ||
      // TODO Deprecate this logic; require the field list to be explicitly provided
      // This is unnecessarily complex
      // TODO Use an appropriate type here
      (this.model as any).fields ||
      // TODO Use an appropriate type here
      (this.model.constructor as any).fields
    );
  }

}
