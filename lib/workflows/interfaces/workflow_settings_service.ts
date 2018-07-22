import {Observable} from 'rxjs';

import {TaskSuggestionServiceGetSuggestionsBaseOptions} from '../../tasks_module/interfaces/task_suggestion_service';


export interface WorkflowSettingsService<
    GET_SUGGESTIONS_OPTIONS_T extends TaskSuggestionServiceGetSuggestionsBaseOptions
  > {
  // Stream of GetSuggestions options (emitted after each options change)
  changes: Observable<GET_SUGGESTIONS_OPTIONS_T>;

  getGetSuggestionsOptions(): GET_SUGGESTIONS_OPTIONS_T;
}
