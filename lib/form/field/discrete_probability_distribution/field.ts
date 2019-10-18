import {FormField} from '../../form_field';
import {FormFieldOptions, FormFieldConfig} from '../../form_field_config';

import {Outcome} from '../../../probability/interfaces/outcome';


export interface DiscreteProbabilityDistributionFieldOptions extends FormFieldOptions {
  // An optional list of outcomes to prepopulate the distribution with
  // The user will be able to remove these outcomes or add additional ones
  outcomePresets?: Outcome[];
}


export class DiscreteProbabilityDistributionFieldConfig extends FormFieldConfig {

  outcomePresets: Outcome[];

  constructor(options: DiscreteProbabilityDistributionFieldOptions) {
    super(options);
    this.outcomePresets = this.getOutcomePresets(options.outcomePresets);
  }

  getOutcomePresets(outcomePresets: Outcome[] | undefined) {
    return outcomePresets || [];
  }

}


// This field serializes on the model as a OutcomeProbabilityAssignment[]
export class DiscreteProbabilityDistributionField<MODEL_T = {}> extends FormField<MODEL_T, DiscreteProbabilityDistributionFieldOptions, DiscreteProbabilityDistributionFieldConfig> {

  constructor(options: DiscreteProbabilityDistributionFieldOptions) {
    super(options, DiscreteProbabilityDistributionFieldConfig);
  }

}
