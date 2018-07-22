import {EventEmitter, Injectable} from '@angular/core';

import {TaskSuggestionServiceGetSuggestionsBaseOptions} from 'lib/tasks_module/interfaces/task_suggestion_service';
import {WorkflowSettingsService} from 'lib/workflows/interfaces/workflow_settings_service';


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
