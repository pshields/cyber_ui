import {Component, Input, Output, EventEmitter} from '@angular/core';

import {CyberUiFormFieldComponentInterface} from '../defs/form_field_component';
import {CyberUiFormFieldEvent} from '../defs/form_field_event';

import {CyberUiFormFieldService} from '../service';

import {DiscreteProbabilityDistributionField} from './field';


@Component({
  selector: 'cyber-ui-discrete-probability-distribution-field',
  templateUrl: 'component.html',
  styleUrls: ['component.scss'],
})
export class CyberUiDiscreteProbabilityDistributionFieldComponent implements CyberUiFormFieldComponentInterface {

  constructor(
    readonly service: CyberUiFormFieldService,
  ) {}

  // Because field is sometimes set dynamically, such as when this field is
  // instantiated dynamically by a cyber-ui-form-field, rather than via template
  // change detection, a setter is used to handle changes to this field.
  _field: DiscreteProbabilityDistributionField;
  get field() {
    return this._field;
  }
  @Input() set field(field: DiscreteProbabilityDistributionField) {
    this._field = field;
    this.handleFieldChange();
  };

  @Input() model: {};

  @Output() event = new EventEmitter<CyberUiFormFieldEvent>();

  handleFieldChange() {
    // Initialize undefined discrete probability distributions with the outcome presets
    const field = this.field;
    if (field.getModelProperty(this.model, field.config.propertyName) === undefined) {
      field.setModelProperty(
        this.model,
        field.config.propertyName,
        field.config.outcomePresets.map(outcome => ({outcome: outcome, probability: {value: ''}}))
      );
    }
  }
}
