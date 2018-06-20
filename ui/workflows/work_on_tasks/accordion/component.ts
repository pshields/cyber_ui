import {Component, Inject, QueryList, ViewChildren} from '@angular/core';

import {Subscription} from 'rxjs';

import {TASK_SUGGESTION_SERVICE} from '../../../tasks_module/injection_tokens/task_suggestion_service';

import {Task} from '../../../tasks_module/interfaces/task';
import {TaskSuggestionService} from '../../../tasks_module/interfaces/task_suggestion_service';
import {TaskSuggestionServiceGetSuggestionsBaseOptions} from '../../../tasks_module/interfaces/task_suggestion_service';
import {TaskSuggestionServiceGetSuggestionsBaseResponse} from '../../../tasks_module/interfaces/task_suggestion_service';
import {CyberUiMinimalTaskExpansionPanelComponent} from '../../../tasks_module/displays/minimal_expansion_panel/component';

import {WORKFLOW_SETTINGS_SERVICE} from '../../injection_tokens/workflow_settings_service';
import {WorkflowSettingsService} from '../../interfaces/workflow_settings_service';


// A work-on-tasks workflow powered by an Angular Material expansion panel
@Component({
  selector: 'cyber-ui-work-on-tasks-accordion-workflow',
  templateUrl: './component.html',
  styleUrls: ['./component.scss'],
})
export class CyberUiWorkOnTasksAccordionWorkflowComponent<
    TASK_T extends Task,
    GET_SUGGESTIONS_OPTIONS_T extends TaskSuggestionServiceGetSuggestionsBaseOptions,
    GET_SUGGESTIONS_RESPONSE_T extends TaskSuggestionServiceGetSuggestionsBaseResponse<TASK_T>
  > {
  @ViewChildren(CyberUiMinimalTaskExpansionPanelComponent) suggestionPanels: QueryList<CyberUiMinimalTaskExpansionPanelComponent<TASK_T>>;

  getSuggestionsOptions: GET_SUGGESTIONS_OPTIONS_T;
  suggestionsResponse: GET_SUGGESTIONS_RESPONSE_T;

  // A reference to the current TaskSuggestionService#getSuggestions subscription
  // (needed for record-keeping in order to unsubscribe from stale subscriptions)
  getSuggestionsSubscription: Subscription;

  constructor(
    @Inject(TASK_SUGGESTION_SERVICE)
    readonly taskSuggestionService: TaskSuggestionService<
      TASK_T,
      GET_SUGGESTIONS_OPTIONS_T,
      GET_SUGGESTIONS_RESPONSE_T
    >,
    @Inject(WORKFLOW_SETTINGS_SERVICE)
    readonly workflowSettingsService: WorkflowSettingsService<
      GET_SUGGESTIONS_OPTIONS_T
    >
  ) {
    // Get options to use during the initial request
    this.getSuggestionsOptions = workflowSettingsService.getGetSuggestionsOptions();
    // Set up the suggestions subscription, given the initial options
    this.loadSuggestions();
    // Handle workflow settings changes
    this.workflowSettingsService.changes.subscribe((settings: GET_SUGGESTIONS_OPTIONS_T) => {
      this.getSuggestionsOptions = settings;
      if (settings.reloadSuggestionsAfterWorkflowSettingsChange) {
        this.loadSuggestions();
      }
    });
  }

  // Subscribes to the suggestion service using the latest workflow settings
  loadSuggestions() {
    // Unsubscribe from the previous subscription, if it exists
    if (this.getSuggestionsSubscription !== undefined) {
      this.getSuggestionsSubscription.unsubscribe();
    }
    this.getSuggestionsSubscription = this.taskSuggestionService
      .getSuggestions(this.getSuggestionsOptions)
      .subscribe((response: GET_SUGGESTIONS_RESPONSE_T) => {
        // Replace the old response (or initial undefined value) with the new response
        this.suggestionsResponse = response;
        // Draw attention to the new top suggestion
        // Needs to be done asynchronously to wait for the view to be updated
        // TODO Allow consumers to disable this functionality via a workflow setting
        setTimeout(() => this.openFirstExpansionPanelIfExists(), 0);
    });
  }

  // Opens the first expansion panel in the accordion, if it exists
  // The idea is to draw attention to the top suggestion whenever the suggestions change
  openFirstExpansionPanelIfExists() {
    if (this.suggestionPanels !== undefined && this.suggestionPanels.length > 0) {
      this.suggestionPanels.first.panel.open();
    }
  }
}
