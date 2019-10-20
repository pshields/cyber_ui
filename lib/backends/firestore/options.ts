import {CyberUiSavableModelSaveOptions} from '../interfaces/savable_model';


export interface CyberUiFirestoreBackedModelSaveOptions extends CyberUiSavableModelSaveOptions {
  // Whether to allow an empty data object to be saved in the backend (default: false)
  allowEmptySave?: boolean;
  // The collection to save this model in
  // If specified here, overrides the model's `collectionId` property
  collectionId?: string;
  // Whether to set the 'added' property on the model client-side before saving, if it's not already set
  // When present, the 'added' property is intended represents the creation time of the model
  // This interface might change over time to reflect the needs of consuming applications
  // (default: true)
  setAddedIfUndefined?: boolean;
}


export interface CyberUiFirestoreBackedModelDeleteOptions {
  // Should the deletion be confirmed with the user? (default: true)
  confirm?: boolean;
}