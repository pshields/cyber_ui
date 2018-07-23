import {DiscreteProbabilityDistribution} from '../../probability/interfaces/discrete_probability_distribution';


export interface Prediction {
  // Label of the thing being predicted
  // This is often best phrased as a question
  // e.g. "How many US senate seats will Democrats hold after the 2020 elections?"
  label: string;

  // the assignment from outcomes to probabilities
  distribution: DiscreteProbabilityDistribution[];

  // unix timestamp in ms when this prediction comes due for evaluation
  due: number;
}
