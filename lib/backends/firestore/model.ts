import {CyberUiFirestoreBackedModelService} from './service';
import {CyberUiFirestoreBackedModelSaveOptions, CyberUiFirestoreBackedModelDeleteOptions} from './options';


export class CyberUiFirestoreBackedModel {

  // The Firestore collection this document resides in
  collectionId?: string;
  // The Firestore document ID of the document corresponding to this model (if one exists)
  id?: string;

  constructor (readonly firestoreBackedModelService: CyberUiFirestoreBackedModelService) {}

  // Shows an edit dialog corresponding to this model
  editInDialog() {
    // TODO Implement using EditDialogService
  }

  // Convert this model into a data object that can be stored in Firestore
  toDataObject() {
    // TODO Implement this (maybe on service.helper?)
    return {};
  }

  // Save this model to the backend
  save(options: CyberUiFirestoreBackedModelSaveOptions = {}): Promise<void> {
    return this.firestoreBackedModelService.backend.saveModel(this, options);
  }

  // Deletes the model from the backend, pending a confirmation from the user
  delete(options: CyberUiFirestoreBackedModelDeleteOptions): Promise<void> {
    return this.firestoreBackedModelService.deleteModel(this, options);
  }

}