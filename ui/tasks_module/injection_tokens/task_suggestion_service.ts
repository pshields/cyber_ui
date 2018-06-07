import {InjectionToken} from '@angular/core';

import {TaskSuggestionService} from '../interfaces/task_suggestion_service';
import {TaskSuggestionServiceGetSuggestionsBaseOptions} from '../interfaces/task_suggestion_service';
import {TaskSuggestionServiceGetSuggestionsBaseResponse} from '../interfaces/task_suggestion_service';


export const TASK_SUGGESTION_SERVICE = new InjectionToken<
  TaskSuggestionService<
    TaskSuggestionServiceGetSuggestionsBaseOptions,
    TaskSuggestionServiceGetSuggestionsBaseResponse
  >
>('Task SuggestionService');
