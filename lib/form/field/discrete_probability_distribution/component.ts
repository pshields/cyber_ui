import {Component, Input, Output, EventEmitter} from '@angular/core';

import {CyberUiFormFieldComponentInterface} from '../defs/form_field_component';

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

  _field: DiscreteProbabilityDistributionField;
  get field() {
    console.log('getting _field', this._field);
    return this._field;
  }
  @Input() set field(field: DiscreteProbabilityDistributionField) {
    this._field = field;
    this.handleFieldChange();
  };

  @Input() model: {};

  @Output() change = new EventEmitter();

  @Output() save = new EventEmitter();

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
