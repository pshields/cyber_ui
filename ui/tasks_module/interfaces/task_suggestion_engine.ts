import {Observable} from 'rxjs';

import {TaskProviderRegistry} from './task_provider_registry';
import {TaskSuggestion} from './task_suggestion';


export interface TaskSuggestionEngineGetSuggestionsOptions {
  taskProviderRegistry?: TaskProviderRegistry;  // the registry to get tasks from
  limit?: number;  // the maximum number of suggestions to return
  deadline?: number;  // the time in ms to return by, even if processing is incomplete
}

export interface TaskSuggestionEngine {
  getSuggestions(
    options: TaskSuggestionEngineGetSuggestionsOptions
  ): Observable<TaskSuggestion[]>;
}
