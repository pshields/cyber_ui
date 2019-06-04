import {Injectable} from '@angular/core';

import {CyberUiFirestoreBackedModel} from './model';
import {CyberUiFirestoreBackedModelSaveOptions} from './options';


const DEFAULT_COLLECTION_ID = 'things';


// Consuming applications may elect to provide their own implementation of this
@Injectable({
  providedIn: 'root'
})
export class CyberUiFirestorePathService {

  // Returns a suitable path to the document for this model, or undefined
  calculatePath(
    model: CyberUiFirestoreBackedModel,
    saveOptions: CyberUiFirestoreBackedModelSaveOptions = {},
  ) {
    const collectionId = this.calculateCollectionId(model, saveOptions);
    if (!collectionId) {
      console.error('Could not determine collectionId');
      return undefined;
    }
    else if (!model.data.id) {
      console.error('Could not determine model id');
      return undefined;
    } else {
      return `${collectionId}/${model.data.id}`;
    }
  }

  // Returns the collection in which to save a given model, or undefined
  // Undefined is returned if the collection id cannot be determined and
  // the model should not be saved
  private calculateCollectionId(
    model: CyberUiFirestoreBackedModel,
    saveOptions: CyberUiFirestoreBackedModelSaveOptions,
  ): string {
    return saveOptions.collectionId || model.collectionId || DEFAULT_COLLECTION_ID;
  }
}