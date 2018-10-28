import {ChangeDetectorRef, Component, EventEmitter, Input, Output, SimpleChanges, OnChanges} from '@angular/core';

import {MatDialog} from '@angular/material';

import {FormField} from '../form_field';
import {FormFieldOptions, FormFieldConfig} from '../form_field_config';
import {FormFieldElement} from '../form_field_element.enum';
import {DiscreteProbabilityDistributionFieldConfig} from '../fields/discrete_probability_distribution';


@Component({
  selector: 'cyber-ui-form-fields',
  templateUrl: 'component.html',
  styleUrls: ['component.scss'],
})
export class CyberUiFormFieldsComponent<MODEL_T> implements OnChanges {

  constructor(
    public changeDetectorRef: ChangeDetectorRef,
    public dialog: MatDialog,
  ) {}

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

  emitSaveAndReturnFalse() {
    this.save.emit();
    return false;
  }

  getFields() {
    return (this.fields || (this.model as any).fields || (this.model.constructor as any).fields);
  }

  ngOnChanges(changes: SimpleChanges) {
    if ((changes.model && this.getFields() !== undefined) || (changes.fields !== undefined && changes.fields.currentValue !== undefined)) {
      // Initialize undefined model fields where necessary
      (this.getFields() || changes.fields.currentValue).forEach(field => {
        // Initialize discrete probabiliy distributions
        if (field.config.element === FormFieldElement.DISCRETE_PROBABILITY_DISTRIBUTION) {
          if (this.model[field.config.propertyName] === undefined) {
            this.model[field.config.propertyName] = (field.config as DiscreteProbabilityDistributionFieldConfig).outcomePresets.map(outcome => ({outcome: outcome, probability: {value: ''}}));
          }
        }
      });
    }
  }

  openHelpDialog(cmp: any) {
    this.dialog.open(cmp);
  }
}
