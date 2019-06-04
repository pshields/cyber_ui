import {Injectable} from '@angular/core';

import {AngularFirestore} from '@angular/fire/firestore';

import {CyberUiFirestoreBackedModel} from './model';
import {CyberUiFirestoreBackedModelSaveOptions, CyberUiFirestoreBackedModelDeleteOptions} from './options';
import {CyberUiFirestorePathService} from './path_service';


// A reference implementation for persisting data in Firestore
@Injectable({providedIn: 'root'})
export class CyberUiFirestoreBackend {

  constructor(
    readonly firestore: AngularFirestore,
    readonly firestorePathService: CyberUiFirestorePathService,
  ) {}

  // Deletes the Firestore document corresponding to this model
  // Note: this is an unsafe, permanent operation (when successful)
  // It is recommended to user CyberUiFirestoreBackedModelService#deleteModel
  // in order to place deletion behind a user-facing confirmation dialog
  deleteModel(
    model: CyberUiFirestoreBackedModel,
    options: CyberUiFirestoreBackedModelDeleteOptions = {},
  ): Promise<void> {
    const path = this.firestorePathService.calculatePath(model);
    // Refuse to delete a model whose path cannot be determined
    if (!path) {
      return Promise.reject('Backend refuses to delete a model whose path cannot be determined');
    }
    const doc = this.firestore.doc(path);
    return doc.delete();
  }

  // Save this model as a Firestore document
  saveModel(
    model: CyberUiFirestoreBackedModel,
    options: CyberUiFirestoreBackedModelSaveOptions = {},
  ): Promise<void> {
    // Assign the model a document id if it doesn't already have one
    model.data.id = model.data.id || this.firestore.createId();
    // Calculate the path at which to save the document
    const path = this.firestorePathService.calculatePath(model, options);
    // Refuse to save if the path could not be determined
    if (!path) {
      return Promise.reject('Failed to calculate path for document');
    }
    // Get a reference to the Firestore document
    const doc = this.firestore.doc(path);
    return doc.set(model.data);
  }
}
