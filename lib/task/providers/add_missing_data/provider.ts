import {Injectable} from '@angular/core';

import {RegisterMissingDataSourceOptions} from './defs/register_missing_data_source_options';
import {RegisterMissingDataSourceResponse} from './defs/register_missing_data_source_response';


// A human readable label describing this provider
export const CYBER_UI_MINDFULLY_ATTEND_TO_TOPIC_TASK_PROVIDER_LABEL = 'Missing data entry';

// A string identifier of this provider for use in e.g. settings lists
export const CYBER_UI_ADD_MISSING_DATA_PROVIDER_ID = 'CYBER_UI_ADD_MISSING_DATA_TASK_PROVIDER';


// Provides data entry tasks related to adding missing data
@Injectable({providedIn: 'root'})
export class CyberUiAddMissingDataTaskProvider {

  constructor() {}

  // Registers a source of missing data with missing-data-task-provider
  registerMissingDataSource(options: RegisterMissingDataSourceOptions): RegisterMissingDataSourceResponse {
    return;
  }

  // For convenience, store the task provider's suggested id as a static class property
  static readonly id = CYBER_UI_ADD_MISSING_DATA_PROVIDER_ID;
}
