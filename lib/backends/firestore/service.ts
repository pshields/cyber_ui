import {Injectable} from '@angular/core';

import {CyberUiModelService} from '../interfaces/model_service';

import {CyberUiFirestoreBackend} from './backend';
import {CyberUiFirestoreBackedModel} from './model';
import {CyberUiFirestoreBackedModelDeleteOptions, CyberUiFirestoreBackedModelSaveOptions} from './options';


// Since models are frequently constructed in Cyber UI,
// this service exists to group all of the various needed dependencies
// into a single injectable service
// That way, we don't have to constantly change the model constructors
// when adding or removing depdencies
@Injectable({providedIn: 'root'})
export class CyberUiFirestoreBackedModelService implements CyberUiModelService {

  constructor(
    readonly backend: CyberUiFirestoreBackend,
  ) {}

  getNewEmptyModel() {
    return new CyberUiFirestoreBackedModel(this, {});
  }

  deleteModel(
    model: CyberUiFirestoreBackedModel,
    options: CyberUiFirestoreBackedModelDeleteOptions,
  ) {
    // Confirm the deletion in all cases except when options.confirm is false
    const confirm = options.confirm !== false;
    if (confirm) {
      // TODO Add a confirmation dialog step here
    } else {
 
    }
    // TODO For now we are just always deleting the model. This needs to be fixed.
    return this.backend.deleteModel(model, options);
  }

  saveModel(
    model: CyberUiFirestoreBackedModel,
    options: CyberUiFirestoreBackedModelSaveOptions,
  ) {
    // Refuse to save an empty model to the backend, unless options.allowEmptySave is true
    if (!options.allowEmptySave) {
      if (Object.keys(model.data).length === 0) {
        return Promise.reject('Model refuses to be saved when it is empty');
      }
    }
    // Set the 'added' date on the model, unless options specify otherwise or the property is already set
    // TODO Add tests for this functionality
    if (options.setAddedIfUndefined === undefined || options.setAddedIfUndefined === true) {
      if (model.data.added === undefined) {
        model.data.added = Date.now();
      }
    }
    return this.backend.saveModel(model, options);
  }

}
