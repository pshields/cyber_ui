import {TaskSuggestionServiceGetSuggestionsBaseOptions} from '../../tasks_module/interfaces/task_suggestion_service';


export interface WorkflowSettingsService<
    GET_SUGGESTIONS_OPTIONS_T extends TaskSuggestionServiceGetSuggestionsBaseOptions
  > {
  getGetSuggestionsOptions(): GET_SUGGESTIONS_OPTIONS_T;
}
