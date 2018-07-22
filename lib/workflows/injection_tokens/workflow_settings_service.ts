import {InjectionToken} from '@angular/core';

import {TaskSuggestionServiceGetSuggestionsBaseOptions} from '../../tasks_module/interfaces/task_suggestion_service';

import {WorkflowSettingsService} from '../interfaces/workflow_settings_service';


export const WORKFLOW_SETTINGS_SERVICE = new InjectionToken<
  WorkflowSettingsService<
    TaskSuggestionServiceGetSuggestionsBaseOptions
  >
>('WorkflowSettingsService');
