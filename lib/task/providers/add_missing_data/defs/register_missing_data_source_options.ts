import {Observable} from 'rxjs';

import {ValidatorFnResponse} from './validator_fn_response';


export interface RegisterMissingDataSourceOptions<SOURCE_MODEL_T = {}> {
  // A unique ID for the source (unique within a given running instance of the add-missing-data provider)
  sourceId: string;
  // The observable providing instances of models to check
  sourceObservable: Observable<SOURCE_MODEL_T[]>;
  // function that returns the list of missing data items corresponding to a model from this source
  validatorFn: (model: SOURCE_MODEL_T) => ValidatorFnResponse;
}
