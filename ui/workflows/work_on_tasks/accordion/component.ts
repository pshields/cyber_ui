import {Component, Inject} from '@angular/core';

import {TASK_SUGGESTION_SERVICE} from '../../../tasks_module/injection_tokens/task_suggestion_service';

import {TaskSuggestionService} from '../../../tasks_module/interfaces/task_suggestion_service';
import {TaskSuggestionServiceGetSuggestionsBaseOptions} from '../../../tasks_module/interfaces/task_suggestion_service';
import {TaskSuggestionServiceGetSuggestionsBaseResponse} from '../../../tasks_module/interfaces/task_suggestion_service';

import {WORKFLOW_SETTINGS_SERVICE} from '../../injection_tokens/workflow_settings_service';
import {WorkflowSettingsService} from '../../interfaces/workflow_settings_service';


// A work-on-tasks workflow powered by an Angular Material expansion panel
@Component({
  selector: 'cyber-ui-work-on-tasks-accordion-workflow',
  templateUrl: './component.html',
})
export class CyberUiWorkOnTasksAccordionWorkflowComponent<
    GET_SUGGESTIONS_OPTIONS_T extends TaskSuggestionServiceGetSuggestionsBaseOptions,
    GET_SUGGESTIONS_RESPONSE_T extends TaskSuggestionServiceGetSuggestionsBaseResponse
  > {

  options: GET_SUGGESTIONS_OPTIONS_T;
  suggestionsResponse: GET_SUGGESTIONS_RESPONSE_T;


  constructor(
    @Inject(TASK_SUGGESTION_SERVICE)
    readonly taskSuggestionService: TaskSuggestionService<
      GET_SUGGESTIONS_OPTIONS_T, GET_SUGGESTIONS_RESPONSE_T
    >,
    @Inject(WORKFLOW_SETTINGS_SERVICE)
    readonly workflowSettingsService: WorkflowSettingsService<
      GET_SUGGESTIONS_OPTIONS_T
    >
  ) {
    // Get options to use during the initial request
    this.options = workflowSettingsService.getGetSuggestionsOptions();
    taskSuggestionService.getSuggestions(this.options).subscribe((response: GET_SUGGESTIONS_RESPONSE_T) => {
      this.suggestionsResponse = response;
    });
    // TODO subscribe to workflow settings options updates and
    // 1) terminate the old suggestions observable, and
    // 2) resubscribe to the task suggestions service with the new options
  }
}
