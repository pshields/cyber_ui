import {Component, EventEmitter, Input, Output} from '@angular/core';

import {CyberUiInteractiveModel} from '../../model/interfaces/interactive_model';
import {CyberUiLiteralModel} from '../../model/interfaces/literal_model';

import {CyberUiFormFieldService} from '../field/service';

import {FormField} from '../form_field';
import {CyberUiFormFieldEvent} from '../field/defs/form_field_event';
import {filter} from 'rxjs/operators';


@Component({
  selector: 'cyber-ui-form-fields',
  templateUrl: 'component.html',
  styleUrls: ['component.scss'],
})
export class CyberUiFormFieldsComponent<MODEL_T extends (CyberUiInteractiveModel|CyberUiLiteralModel)> {

  constructor(
    readonly service: CyberUiFormFieldService,
  ) {}

  // The model object to render the form fields for
  @Input() model: MODEL_T;

  // Optional. The list of fields to display.
  // If not provided, the component will look for a `fields` property on the model or the model's constructor.
  @Input() fields: FormField<MODEL_T>[];

  // If only a single field is to be used.
  @Input() field: FormField<MODEL_T>;

  // Stream of events from the fields in this form
  @Output() event = new EventEmitter<CyberUiFormFieldEvent>();

  // For convenience, expose filtered event streams for 'save' and 'change' events
  @Output() change = this.event.pipe(filter(event => event.type === 'change'));
  @Output() save = this.event.pipe(filter(event => event.type === 'save'));

  getFields() {
    return (this.fields || (this.field && [this.field]) || (this.model as any).fields || (this.model.constructor as any).fields);
  }

}
