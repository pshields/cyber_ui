import {Component, Inject, ComponentFactory, ComponentFactoryResolver, Input, OnChanges, OnDestroy, SimpleChanges, ViewChild, ViewContainerRef} from '@angular/core';

import {Subscription, Subject, ReplaySubject} from 'rxjs';

import {FormField} from '../../form/form_field';
import {TASK_SUGGESTION_SERVICE} from '../../task/injection_tokens/task_suggestion_service';
import {Task} from '../../task/interfaces/task';
import {TaskSuggestionService} from '../../task/interfaces/task_suggestion_service';
import {TaskSuggestionServiceGetSuggestionsBaseOptions} from '../../task/interfaces/task_suggestion_service';
import {TaskSuggestionServiceGetSuggestionsBaseResponse} from '../../task/interfaces/task_suggestion_service';

import {WORKFLOW_SETTINGS_SERVICE} from '../injection_tokens/workflow_settings_service';
import {WorkflowSettingsService} from '../interfaces/workflow_settings_service';

import {CyberUiWorkOnTasksWorkflowService} from './service';


// A workflow for working on tasks using an arbitrary task-list-rendering component
@Component({
  selector: 'cyber-ui-work-on-tasks-workflow',
  templateUrl: './component.html',
})
export class CyberUiWorkOnTasksWorkflowComponent<
    TASK_T extends Task = Task,
    GET_SUGGESTIONS_OPTIONS_T extends TaskSuggestionServiceGetSuggestionsBaseOptions = TaskSuggestionServiceGetSuggestionsBaseOptions,
    GET_SUGGESTIONS_RESPONSE_T extends TaskSuggestionServiceGetSuggestionsBaseResponse<TASK_T> = TaskSuggestionServiceGetSuggestionsBaseResponse<TASK_T>
  > implements OnChanges, OnDestroy {

  getSuggestionsOptions: GET_SUGGESTIONS_OPTIONS_T;
  suggestionsResponse: GET_SUGGESTIONS_RESPONSE_T;

  // A reference to the current TaskSuggestionService#getSuggestions subscription
  // (needed for record-keeping in order to unsubscribe from stale subscriptions)
  getSuggestionsSubscription: Subscription;

  // A subject containing the latest tasks (to pass to the display component)
  tasks: Subject<TASK_T[]> = new ReplaySubject<TASK_T[]>(1);

  @ViewChild('view', {read: ViewContainerRef, static: true}) viewContainer: ViewContainerRef;

  // The Angular component to use to display the tasks
  @Input() displayComponent: any;
  // The filters available for this task suggestion worfklow
  @Input() filters: FormField[];
  // The filter settings
  @Input() filterSettings: {};

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
    >,
    private readonly resolver: ComponentFactoryResolver,
    readonly service: CyberUiWorkOnTasksWorkflowService,
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
    // Subscribe to any reload events sent by the service
    // This allows consumers to request a reload of suggestions in response to e.g. user action
    service.reloadEvents.subscribe(() => this.loadSuggestions());
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes.displayComponent) {
      // Clear the existing display component, if one exists
      this.viewContainer.clear();
      // Insert the new body component
      const factory: ComponentFactory<any> = this.resolver.resolveComponentFactory(changes.displayComponent.currentValue);
      const componentRef = this.viewContainer.createComponent(factory);
      // Set the 'tasks' input on the component to the tasks subject
      componentRef.instance.tasks = this.tasks;
    }
  }

  // Subscribes to the suggestion service using the latest workflow settings
  loadSuggestions() {
    // Unsubscribe from the previous subscription, if it exists
    if (this.getSuggestionsSubscription !== undefined && !this.getSuggestionsSubscription.closed) {
      this.getSuggestionsSubscription.unsubscribe();
    }
    this.getSuggestionsSubscription = this.taskSuggestionService
      .getSuggestions(this.getSuggestionsOptions)
      .subscribe((response: GET_SUGGESTIONS_RESPONSE_T) => {
        // Replace the old response (or initial undefined value) with the new response
        this.suggestionsResponse = response;
        // Update the tasks subject
        this.tasks.next(response.suggestions.map(suggestion => suggestion.task));
    });
  }

  ngOnDestroy() {
    // Clean up and unsubscribe from the task suggestion service, to avoid memory leaks
    if (this.getSuggestionsSubscription !== undefined && !this.getSuggestionsSubscription.closed) {
      this.getSuggestionsSubscription.unsubscribe();
    }
  }
}
