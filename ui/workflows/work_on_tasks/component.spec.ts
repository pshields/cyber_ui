import {TestBed, async, ComponentFixture} from '@angular/core/testing';

import {NoopAnimationsModule} from '@angular/platform-browser/animations';

import {Task} from '../../tasks_module/interfaces/task';
import {TaskSuggestionServiceGetSuggestionsBaseOptions} from '../../tasks_module/interfaces/task_suggestion_service';
import {TaskSuggestionServiceGetSuggestionsBaseResponse} from '../../tasks_module/interfaces/task_suggestion_service';
import {TASK_SUGGESTION_SERVICE} from '../../tasks_module/injection_tokens/task_suggestion_service';
import {FakeTaskSuggestionService} from '../../tasks_module/testing/task_suggestion_service.fake';
import {CyberUiTaskAccordionComponent} from '../../tasks_module/displays/accordion/component';

import {WORKFLOW_SETTINGS_SERVICE} from '../injection_tokens/workflow_settings_service';
import {FakeWorkflowSettingsService} from '../testing/workflow_settings_service.fake';

import {CyberUiWorkOnTasksWorkflowComponent} from './component';
import {CyberUiWorkOnTasksWorkflowModule} from './module';


describe('CyberUiWorkOnTasksAccordionWorkflowComponent', () => {
  let fixture: ComponentFixture<
      CyberUiWorkOnTasksWorkflowComponent<
          Task,
          TaskSuggestionServiceGetSuggestionsBaseOptions,
          TaskSuggestionServiceGetSuggestionsBaseResponse<Task>
      >
  >;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        CyberUiWorkOnTasksWorkflowModule,
        NoopAnimationsModule,
      ],
      providers: [
        {provide: TASK_SUGGESTION_SERVICE, useClass: FakeTaskSuggestionService},
        {provide: WORKFLOW_SETTINGS_SERVICE, useClass: FakeWorkflowSettingsService},
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CyberUiWorkOnTasksWorkflowComponent);
    // Use the task accordion as a reasonable default for the display component
    fixture.componentInstance.displayComponent = CyberUiTaskAccordionComponent;
  });

  describe('before the first suggestionsResponse is received', () => {
    it('does not display anything', () => {
      expect(fixture.nativeElement.children.length).toEqual(0);
    });
  });

  describe('when the workflow settings change', () => {
    describe('when the settings say to reload the suggestions on workflow settings changes', () => {
      // TODO Test that the TaskSuggestionService#getSuggestions is called with the new settings
      // TODO Test that the old subscription is unsubscribed and torn down
    });
    describe('when the settings say not to reload the suggestions on workflow settings changes', () => {
      // TODO Test that TaskSuggestionService#getSuggestions is not called again
    });
  });
});
