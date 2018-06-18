import {Injectable, EventEmitter} from '@angular/core';

import {TaskSuggestionServiceGetSuggestionsBaseOptions} from '../../tasks_module/interfaces/task_suggestion_service';

import {WorkflowSettingsService} from '../interfaces/workflow_settings_service';


// A fake WorkflowSettingsService to use during tests
@Injectable()
export class FakeWorkflowSettingsService implements WorkflowSettingsService<
    TaskSuggestionServiceGetSuggestionsBaseOptions
> {
  // Emits the latest settings object whenever it has been changed
  public changes = new EventEmitter<TaskSuggestionServiceGetSuggestionsBaseOptions>();

  // The current options
  private options = {};

  getGetSuggestionsOptions() {
    return this.options;
  }

  setGetSuggestionsOptions(options: TaskSuggestionServiceGetSuggestionsBaseOptions) {
    this.options = options;
    this.changes.emit(options);
  }
}
