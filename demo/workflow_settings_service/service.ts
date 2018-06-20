import {EventEmitter, Injectable} from '@angular/core';

import {TaskSuggestionServiceGetSuggestionsBaseOptions} from 'ui/tasks_module/interfaces/task_suggestion_service';
import {WorkflowSettingsService} from 'ui/workflows/interfaces/workflow_settings_service';


// A WorkflowSettingsService for use on the demo site
@Injectable()
export class DemoWorkflowSettingsService implements WorkflowSettingsService<
    TaskSuggestionServiceGetSuggestionsBaseOptions
  > {
  changes = new EventEmitter<TaskSuggestionServiceGetSuggestionsBaseOptions>();

  constructor() {}

  getGetSuggestionsOptions(): TaskSuggestionServiceGetSuggestionsBaseOptions {
    return {};
  }
}
