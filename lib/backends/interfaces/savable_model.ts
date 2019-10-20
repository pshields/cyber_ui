export interface CyberUiSavableModelSaveOptions {
  // In an effort to minimize the amount of work downstream consumers
  // must take to comply with this interface, it is currently empty
}


// Interface for savable models as far as Cyber UI is concerned
export interface CyberUiSavableModel {

  // Saves this model to whatever backend it is associated with
  save(options?: CyberUiSavableModelSaveOptions): Promise<void>;

}
