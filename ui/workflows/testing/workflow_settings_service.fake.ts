import {Injectable} from '@angular/core';

import {TaskSuggestionServiceGetSuggestionsBaseOptions} from '../../tasks_module/interfaces/task_suggestion_service';

import {WorkflowSettingsService} from '../interfaces/workflow_settings_service';


// A fake WorkflowSettingsService to use during tests
@Injectable()
export class FakeWorkflowSettingsService implements WorkflowSettingsService<
    TaskSuggestionServiceGetSuggestionsBaseOptions
> {
    getGetSuggestionsOptions() {
      return {};
  }
}
