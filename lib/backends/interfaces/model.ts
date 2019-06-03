// Interface for savable models as far as Cyber UI is concerned
export interface CyberUiSavableModel {

  // Saves this model to whatever backend it is associated with
  save(options?: any): Promise<void>;

  // Returns a JSON representation of the model's data
  // TODO Move this to a separate interface; it's not related to saving
  toJson(): {};
}
