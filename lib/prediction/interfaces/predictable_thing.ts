import {Outcome} from '../../probability/interfaces/outcome';


// A thing to be predicted
// This can be useful for grouping predictions by one or more users about the same thing
// For example, a prediction market, where many predictions are made about the same thing,
// might refer to an object of this type as its subject
export interface PredictableThing {
  // The thing being predicted (for example, '# of Dem senate seats after 2020 elections')
  label: string;
  // A curated list of preset outcomes for this topic (optional)
  presetOutcomes?: Outcome[];
}
