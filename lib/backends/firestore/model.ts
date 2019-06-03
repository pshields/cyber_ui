import {CyberUiFirestoreBackedModelData} from './data.interface';

import {CyberUiFirestoreBackedModelService} from './service';
import {CyberUiFirestoreBackedModelDeleteOptions} from './options';
import {CyberUiFirestoreBackedModelSaveOptions} from './options';


// Q. Why do we need a model in the first place?
// A. It would be really nice to be able to write code such as model.save().then(...)
// A. It's nice to not need a reference to the underlying service from the template logic
//
// Q. Should the model keep it's own internal data object for saving to Firestore,
//    OR should it just store the properties on itself,
//    OR should consumers have to pass in a data object to use as the state?
// A. For now, let's have consumers pass in a data object to use as the state
//    There hasn't been a strong enough argument yet for making a separate state copy
export class CyberUiFirestoreBackedModel {

  // The Firestore collection this document resides in
  collectionId?: string;
  // The Firestore document ID of the document corresponding to this model (if one exists)
  id?: string;

  constructor (
    // A reference to the service where most of the logic lives
    readonly firestoreBackedModelService: CyberUiFirestoreBackedModelService,
    // A reference to the data object to use for this model
    // 'data object' in this context means the object that will be saved to Firestore
    // Rather than making its own copy of the object, at present,
    // the model will use the provided `data` object itself as the state
    // (and will update it as necessary)
    readonly data: CyberUiFirestoreBackedModelData = {},
  ) {}

  // Shows an edit dialog corresponding to this model
  editInDialog() {
    // TODO Implement using EditDialogService
  }

  getProperty(propertyName: string) {
    return this.data[propertyName];
  }

  setProperty(propertyName: string, value: {}) {
    this.data[propertyName] = value;
  }

  // Save this model to the backend
  save(options: CyberUiFirestoreBackedModelSaveOptions = {}): Promise<void> {
    return this.firestoreBackedModelService.saveModel(this, options);
  }

  // Deletes the model from the backend, pending a confirmation from the user
  delete(options: CyberUiFirestoreBackedModelDeleteOptions): Promise<void> {
    return this.firestoreBackedModelService.deleteModel(this, options);
  }

  // TODO Address security implications of this; maybe make a copy?
  toJson() {
    return this.data;
  }

}
