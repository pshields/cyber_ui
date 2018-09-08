// This enum lists all elements/components that form fields can become in templates
// These values should not be persisted; they are not guaranteed to be stable over time
// This list may grow or change over time
// Note that a given field type may only support one or a small number of these elements
export enum FormFieldElement {
  NONE,  // For fields that don't end up in the UI
  INPUT,
  MAT_CHECKBOX,
  MAT_SLIDE_TOGGLE,
  MAT_SLIDER,
  SELECT,
  TEXTAREA,
  DISCRETE_PROBABILITY_DISTRIBUTION,
}
