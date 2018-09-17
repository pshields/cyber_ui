import {Injectable} from '@angular/core';

import {CyberUiFirestoreBackend} from './backend';
import {CyberUiFirestoreBackedModel} from './model';
import {CyberUiFirestoreBackedModelDeleteOptions} from './options';


// Since models are frequently constructed in Cyber UI,
// this service exists to group all of the various needed dependencies
// into a single injectable service
// That way, we don't have to constantly change the model constructors
// when adding or removing depdencies
@Injectable({providedIn: 'root'})
export class CyberUiFirestoreBackedModelService {

  constructor(
    readonly backend: CyberUiFirestoreBackend,
  ) {}

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
    return this.backend.deleteModel(model);
  }

}