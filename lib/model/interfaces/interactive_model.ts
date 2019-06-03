// Because we don't know where a model implementation stores its properties,
// it's expected that model implementations may implement the below interface
// to get and set model properties at a non-standard location.
// For at least one reason, Cyber UI will fall back to storing the properties
// directly on the model object if it cannot find these methods on the model.
// The use case there is for recursive model fields where the root model is
// a CyberUiInteractiveModel but the children models are simple JavaScript objects
export interface CyberUiInteractiveModel {
  // Gets the property with the given property name from the model
  // This is necessary because some models might not store the model's properties
  // on the model object itself - they might e.g. store them on a model.data object
  // TODO Move this to a separate interface; it's not related to saving
  getProperty(propertyName: string): {};

  // Sets the model's property with the given value
  // TODO Move this to a separate interface; it's not related to saving
  setProperty(propertyName: string, value: {});
}
