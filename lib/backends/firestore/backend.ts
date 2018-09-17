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
  ) {
    const doc = this.firestore.doc(model.getFirestoreDocumentPath());
    return doc.delete();
  }

  // Save this model as a Firestore document
  saveModel(
    model: CyberUiFirestoreBackedModel,
    options: CyberUiFirestoreBackedModelSaveOptions = {},
  ) {
    // Get a reference to the Firestore document
    const doc = this.firestore.doc(model.getFirestoreDocumentPath());
    return doc.set(model.toDataObject());
  }

}
