export interface CyberUiSavableModelSaveOptions {
  // Whether to set the 'added' property on the model client-side before saving, if it's not already set
  // When present, the 'added' property is intended represents the creation time of the model
  // This interface might change over time to reflect the needs of consuming applications
  // (default: true)
  setAddedIfUndefined?: boolean;
}


// Interface for savable models as far as Cyber UI is concerned
export interface CyberUiSavableModel {

  // Saves this model to whatever backend it is associated with
  save(options?: CyberUiSavableModelSaveOptions): Promise<void>;

}
