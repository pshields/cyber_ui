import {Observable} from 'rxjs';

import {Task} from './task';
import {TaskSuggestion} from './task_suggestion';


// Base options that any custom options interface must extend
export interface TaskSuggestionServiceGetSuggestionsBaseOptions {
  // The maximum number of suggestions to return
  limit?: number;
  // The maximum duration in ms to return an initial result by, even if processing is incomplete
  deadline?: number;
  // Whether to reload the suggestions after workflow settings changes
  reloadSuggestionsAfterWorkflowSettingsChange?: boolean;
  // The IDs of the providers to get tasks from (default: all providers)
  taskProviders?: string[];
}


// Base response that any custom response interface must extend
export interface TaskSuggestionServiceGetSuggestionsBaseResponse<
    TASK_T extends Task
  > {
  // The suggestions comprising this response
  suggestions: TaskSuggestion<TASK_T>[];
}


export interface TaskSuggestionService<
    TASK_T extends Task,
    GET_SUGGESTIONS_OPTIONS_T extends TaskSuggestionServiceGetSuggestionsBaseOptions,
    GET_SUGGESTIONS_RESPONSE_T extends TaskSuggestionServiceGetSuggestionsBaseResponse<TASK_T>,
> {

  // Returns a stream of suggestion responses
  getSuggestions(options: GET_SUGGESTIONS_OPTIONS_T): Observable<GET_SUGGESTIONS_RESPONSE_T>;

}
