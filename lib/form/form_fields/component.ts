import {Component, EventEmitter, Input, Output, ChangeDetectionStrategy} from '@angular/core';

import {filter} from 'rxjs/operators';

import {CyberUiFormFieldEvent} from '../field/defs/form_field_event';
import {CyberUiFormModel} from '../defs/form_model';
import {FormField} from '../form_field';


@Component({
  selector: 'cyber-ui-form-fields',
  templateUrl: 'component.html',
  styleUrls: ['component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CyberUiFormFieldsComponent<MODEL_T extends CyberUiFormModel> {

  // The list of fields to be displayed
  //
  // Because cyber-ui-form-fields uses OnPush change detection, if this array
  // is altered, changes will not necessarily be detected. Instead, a new array
  // should be provided any time the fields change.
  //
  // Note: the 'async' pipe is useful here when combined with a fields observable.
  //. e.g. <cyber-ui-form-fields [fields]="fieldsObservable | async" ...>
  @Input() fields: FormField<MODEL_T>[];

  // The data model that the fields are for
  @Input() model: MODEL_T;

  // Stream of events from the fields in this form
  @Output() event = new EventEmitter<CyberUiFormFieldEvent>();

  // For convenience, expose filtered event streams for 'save' and 'change' events
  @Output() change = this.event.pipe(filter(event => event.type === 'change'));
  @Output() save = this.event.pipe(filter(event => event.type === 'save'));

}
