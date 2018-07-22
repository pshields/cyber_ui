// In order to allow for representing fractional values precisely and
// without rounding errors, Cyber UI stores probabilities as strings.
// Consumers should parse these strings to fractions or decimals using a
// library such as math.js to arrive at the numeric value.
export interface Probability {
  value: string;
}
