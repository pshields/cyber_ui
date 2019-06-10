import {ChangeDetectorRef, Component, EventEmitter, Input, Output, SimpleChanges, OnChanges} from '@angular/core';

import {MatDialog} from '@angular/material/dialog';

import {FormField} from '../form_field';
import {FormFieldElement} from '../form_field_element.enum';
import {DiscreteProbabilityDistributionFieldConfig} from '../fields/discrete_probability_distribution';
import {CyberUiInteractiveModel} from '../../model/interfaces/interactive_model';
import {CyberUiLiteralModel} from '../../model/interfaces/literal_model';


@Component({
  selector: 'cyber-ui-form-fields',
  templateUrl: 'component.html',
  styleUrls: ['component.scss'],
})
export class CyberUiFormFieldsComponent<MODEL_T extends (CyberUiInteractiveModel|CyberUiLiteralModel)> implements OnChanges {

  constructor(
    public changeDetectorRef: ChangeDetectorRef,
    public dialog: MatDialog,
  ) {}

  // The model object to render the form fields for
  @Input() model: MODEL_T;

  // Optional. The list of fields to display.
  // If not provided, the component will look for a `fields` property on the model or the model's constructor.
  @Input() fields: FormField<MODEL_T>[];

  // If only a single field is to be used.
  @Input() field: FormField<MODEL_T>;

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
    return (this.fields || (this.field && [this.field]) || (this.model as any).fields || (this.model.constructor as any).fields);
  }

  // Utility function to get a model property
  // TODO Remove redundancy with implementation on FormField class
  getModelProperty(model: MODEL_T, propertyName: string) {
    if ('getProperty' in model) {
      // If the model implements getProperty(), use that
      return (model as CyberUiInteractiveModel).getProperty(propertyName);
    } else {
      // Otherwise, assume this is a simple literal object model
      return model[propertyName];
    }
  }

  // TODO Remove redundancy with implementation on FormField class
  setModelProperty(model: MODEL_T, propertyName: string, value: {}) {
    if ('setProperty' in model) {
      // If the model implements setProperty(), use that
      return (model as CyberUiInteractiveModel).setProperty(propertyName, value);
    } else {
      // Otherwise, assume this is a simple literal object model
      model[propertyName] = value;
    }
  }

  ngOnChanges(changes: SimpleChanges) {
    if ((changes.model && this.getFields() !== undefined) || (changes.fields !== undefined && changes.fields.currentValue !== undefined)) {
      // Initialize undefined model fields where necessary
      (this.getFields() || changes.fields.currentValue).forEach(field => {
        // Initialize discrete probabiliy distributions
        if (field.config.element === FormFieldElement.DISCRETE_PROBABILITY_DISTRIBUTION) {
          if (this.getModelProperty(this.model, field.config.propertyName) === undefined) {
            this.setModelProperty(this.model, field.config.propertyName, (field.config as DiscreteProbabilityDistributionFieldConfig).outcomePresets.map(outcome => ({outcome: outcome, probability: {value: ''}})));
          }
        }
      });
    }
  }

  onNgModelChange(model: MODEL_T, propertyName: string, newValue: {}) {
    this.setModelProperty(model, propertyName, newValue);
    this.change.emit();
  }

  openHelpDialog(cmp: any) {
    this.dialog.open(cmp);
  }
}
