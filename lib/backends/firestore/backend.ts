import {Injectable} from '@angular/core';

import {AngularFirestore} from '@angular/fire/firestore';

import {CyberUiFirestoreBackedModel} from './model';
import {CyberUiFirestoreBackedModelSaveOptions, CyberUiFirestoreBackedModelDeleteOptions} from './options';


// A reference implementation for persisting data in Firestore
@Injectable({providedIn: 'root'})
export class CyberUiFirestoreBackend {

  constructor(
    readonly firestore: AngularFirestore,
  ) {}

  // Deletes the Firestore document corresponding to this model
  // Note: this is an unsafe, permanent operation (when successful)
  // It is recommended to user CyberUiFirestoreBackedModelService#deleteModel
  // in order to place deletion behind a user-facing confirmation dialog
  deleteModel(
    model: CyberUiFirestoreBackedModel,
    options: CyberUiFirestoreBackedModelDeleteOptions = {},
  ): Promise<void> {
    // Refuse to delete a model missing a collection or document ID
    if (!model.collectionId || !model.id) {
      return Promise.reject('Backend refuses to delete a model that is missing a collection or a document ID');
    }
    const doc = this.firestore.doc(`${model.collectionId}/${model.id}`);
    return doc.delete();
  }

  // Save this model as a Firestore document
  saveModel(
    model: CyberUiFirestoreBackedModel,
    options: CyberUiFirestoreBackedModelSaveOptions = {},
  ): Promise<void> {
    // Determine the collection in which to save the model
    const collectionId = options.collectionId || model.collectionId;
    // Refuse to save if the collection in which to save the model has not been specified
    if (!collectionId) {
      return Promise.reject('The collection in which to save this model must be specified before it can be saved');
    }
    // Assign the model a document id if it doesn't already have one
    model.id = model.id || this.firestore.createId();
    // Get a reference to the Firestore document
    const doc = this.firestore.doc(`${collectionId}/${model.id}`);
    return doc.set(model.toDataObject());
  }

}
