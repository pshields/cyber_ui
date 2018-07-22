import {OutcomeProbabilityAssignment} from './outcome_probability_assignment';


// A discrete probability distribution
// Suitable for model-generated or human-generated predictions
export interface DiscreteProbabilityDistribution {
  // The sum of items' probabilities must be in (0, 1]
  // If the sum is less than one, this indicates an implied
  // "none of the above" outcome receiving the rest of the mass
  items: OutcomeProbabilityAssignment[];
}
