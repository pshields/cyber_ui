import {ChangeDetectorRef, Component, EventEmitter, Input, Output, SimpleChanges, OnChanges} from '@angular/core';

import {FormField} from '../form_field';
import {FormFieldElement} from '../form_field_element.enum';
import {DiscreteProbabilityDistributionFieldConfig} from '../field/discrete_probability_distribution/field';
import {CyberUiInteractiveModel} from '../../model/interfaces/interactive_model';
import {CyberUiLiteralModel} from '../../model/interfaces/literal_model';
import {CyberUiFormFieldService} from '../field/service';


@Component({
  selector: 'cyber-ui-form-fields',
  templateUrl: 'component.html',
  styleUrls: ['component.scss'],
})
export class CyberUiFormFieldsComponent<MODEL_T extends (CyberUiInteractiveModel|CyberUiLiteralModel)> implements OnChanges {

  constructor(
    readonly changeDetectorRef: ChangeDetectorRef,
    readonly service: CyberUiFormFieldService,
  ) {}

  // The model object to render the form fields for
  @Input() model: MODEL_T;

  // Optional. The list of fields to display.
  // If not provided, the component will look for a `fields` property on the model or the model's constructor.
  @Input() fields: FormField<MODEL_T>[];

  // If only a single field is to be used.
  @Input() field: FormField<MODEL_T>;

  // Stream of change actions. An event will be emitted when any field's value changes.
  @Output() change: EventEmitter<void> = new EventEmitter();

  // Stream of save actions. If the model should be saved, an event will be emitted.
  @Output() save: EventEmitter<void> = new EventEmitter();

  // Expose the FormFieldElement enum to the template for use in comparisons
  readonly elements = FormFieldElement;

  getFields() {
    return (this.fields || (this.field && [this.field]) || (this.model as any).fields || (this.model.constructor as any).fields);
  }

  ngOnChanges(changes: SimpleChanges) {
    if ((changes.model && this.getFields() !== undefined) || (changes.fields !== undefined && changes.fields.currentValue !== undefined)) {
      // Initialize undefined model fields where necessary
      (this.getFields() || changes.fields.currentValue).forEach(field => {
        // Initialize discrete probability distributions
        // TODO This logic should live elsewhere, not here in cyber-ui-form-fields component
        if (field.config.element === FormFieldElement.DISCRETE_PROBABILITY_DISTRIBUTION) {
          if (field.getModelProperty(this.model, field.config.propertyName) === undefined) {
            field.setModelProperty(this.model, field.config.propertyName, (field.config as DiscreteProbabilityDistributionFieldConfig).outcomePresets.map(outcome => ({outcome: outcome, probability: {value: ''}})));
          }
        }
      });
    }
  }

}
