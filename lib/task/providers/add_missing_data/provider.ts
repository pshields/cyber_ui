import {Injectable} from '@angular/core';

import {RegisterCollectionOptions} from './defs/register_collection_options';
import {RegisterCollectionResponse} from './defs/register_collection_response';


// A human readable label describing this provider
export const CYBER_UI_MINDFULLY_ATTEND_TO_TOPIC_TASK_PROVIDER_LABEL = 'Missing data entry';

// A string identifier of this provider for use in e.g. settings lists
export const CYBER_UI_ADD_MISSING_DATA_PROVIDER_ID = 'CYBER_UI_ADD_MISSING_DATA_TASK_PROVIDER';


// Provides data entry tasks related to adding missing data
@Injectable({providedIn: 'root'})
export class CyberUiAddMissingDataTaskProvider {

  constructor() {}

  // Registers a collection with the provider
  registerCollection(options: RegisterCollectionOptions): RegisterCollectionResponse {
    return;
  }

  // For convenience, store the task provider's suggested id as a static class property
  static readonly id = CYBER_UI_ADD_MISSING_DATA_PROVIDER_ID;
}
