import {FormField} from '../../form_field';
import {FormFieldOptions, FormFieldConfig} from '../../form_field_config';
import {FormFieldElement} from '../../form_field_element.enum';
import {Outcome} from '../../../probability/interfaces/outcome';


export interface DiscreteProbabilityDistributionFieldOptions extends FormFieldOptions {
  // An optional list of outcomes to prepopulate the distribution with
  // The user will be able to remove these outcomes or add additional ones
  outcomePresets?: Outcome[];
}


export class DiscreteProbabilityDistributionFieldConfig extends FormFieldConfig {

  outcomePresets: Outcome[];

  constructor(options: DiscreteProbabilityDistributionFieldOptions) {
    super(
      options,
      // Supported elements for this field type are DISCRETE_PROBABILITY_DISTRIBUTION
      [FormFieldElement.DISCRETE_PROBABILITY_DISTRIBUTION],
      // The default UI element for this field type is DISCRETE_PROBABILITY_DISTRIBUTION
      FormFieldElement.DISCRETE_PROBABILITY_DISTRIBUTION,
    );
    this.outcomePresets = this.getOutcomePresets(options.outcomePresets);
  }

  getOutcomePresets(outcomePresets: Outcome[] | undefined) {
    return outcomePresets || [];
  }

}


// This field serializes on the model as a OutcomeProbabilityAssignment[]
export class DiscreteProbabilityDistributionField<MODEL_T = {}> extends FormField<MODEL_T, FormFieldOptions, FormFieldConfig> {

  constructor(options: DiscreteProbabilityDistributionFieldOptions) {
    super(options, DiscreteProbabilityDistributionFieldConfig);
  }

}
