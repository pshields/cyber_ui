// A data point is essentially a value
// The value could be a string, a number, or something even more complex
export interface DataPoint<VALUE_T = {}> {
  // An instance of a value for some metric
  // `value` has polymorphic type since the concrete type is not known at compile-time
  value?: VALUE_T;
}
