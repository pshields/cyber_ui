import {CyberUiSavableModelSaveOptions} from '../interfaces/savable_model';


export interface CyberUiFirestoreBackedModelSaveOptions extends CyberUiSavableModelSaveOptions {
  // Whether to allow an empty data object to be saved in the backend (default: false)
  allowEmptySave?: boolean;
  // The collection to save this model in
  // If specified here, overrides the model's `collectionId` property
  collectionId?: string;
}


export interface CyberUiFirestoreBackedModelDeleteOptions {
  // Should the deletion be confirmed with the user? (default: true)
  confirm?: boolean;
}