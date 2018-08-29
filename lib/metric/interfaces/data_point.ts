// A data point is essentially a value for some corresponding metric
// The value could be a string, a number, or something even more complex
// We don't want to constrain it at compile-time, so `value` has a polymorphic type
export interface DataPoint<
    VALUE_T = {}
> {

  // An instance of a value for some metric
  value?: VALUE_T;

}
