import {Component, Input, Output, EventEmitter, SimpleChanges, OnChanges} from '@angular/core';

import {CyberUiFormFieldComponentInterface} from '../defs/form_field_component';
import {CyberUiFormFieldEvent} from '../defs/form_field_event';

import {CyberUiFormFieldService} from '../service';

import {DiscreteProbabilityDistributionField} from './field';


@Component({
  selector: 'cyber-ui-discrete-probability-distribution-field',
  templateUrl: 'component.html',
  styleUrls: ['component.scss'],
})
export class CyberUiDiscreteProbabilityDistributionFieldComponent implements CyberUiFormFieldComponentInterface, OnChanges {

  constructor(
    readonly service: CyberUiFormFieldService,
  ) {}

  @Input() field: DiscreteProbabilityDistributionField;

  @Input() model: {};

  @Output() event = new EventEmitter<CyberUiFormFieldEvent>();

  ngOnChanges(changes: SimpleChanges) {
    if (changes.field) {
      this.handleFieldChange();
    }
  }

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
