import {Outcome} from './outcome';
import {Probability} from './probability';


// An assignment of a probability to an outcome
export interface OutcomeProbabilityAssignment {
  outcome: Outcome;
  probability: Probability;
}
