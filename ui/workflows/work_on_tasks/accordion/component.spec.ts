import {TestBed, async, fakeAsync, tick, ComponentFixture} from '@angular/core/testing';
import {By} from '@angular/platform-browser';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';

import {Task} from '../../../tasks_module/interfaces/task';
import {TaskSuggestionServiceGetSuggestionsBaseOptions} from '../../../tasks_module/interfaces/task_suggestion_service';
import {TaskSuggestionServiceGetSuggestionsBaseResponse} from '../../../tasks_module/interfaces/task_suggestion_service';
import {TASK_SUGGESTION_SERVICE} from '../../../tasks_module/injection_tokens/task_suggestion_service';
import {FakeTaskSuggestionService} from '../../../tasks_module/testing/task_suggestion_service.fake';

import {WORKFLOW_SETTINGS_SERVICE} from '../../injection_tokens/workflow_settings_service';
import {FakeWorkflowSettingsService} from '../../testing/workflow_settings_service.fake';

import {CyberUiWorkOnTasksAccordionWorkflowComponent} from './component';
import {CyberUiWorkOnTasksAccordionWorkflowModule} from './module';

describe('CyberUiWorkOnTasksAccordionWorkflowComponent', () => {
  let fixture: ComponentFixture<
      CyberUiWorkOnTasksAccordionWorkflowComponent<
          Task,
          TaskSuggestionServiceGetSuggestionsBaseOptions,
          TaskSuggestionServiceGetSuggestionsBaseResponse<Task>
      >
  >;
  let suggestionService: FakeTaskSuggestionService;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        CyberUiWorkOnTasksAccordionWorkflowModule,
        NoopAnimationsModule,
      ],
      providers: [
        {provide: TASK_SUGGESTION_SERVICE, useClass: FakeTaskSuggestionService},
        {provide: WORKFLOW_SETTINGS_SERVICE, useClass: FakeWorkflowSettingsService},
      ]
    }).compileComponents();
  }));
  beforeEach(() => {
    fixture = TestBed.createComponent(CyberUiWorkOnTasksAccordionWorkflowComponent);
    suggestionService = TestBed.get(TASK_SUGGESTION_SERVICE);
  });
  describe('before the first suggestionsResponse is received', () => {
    it('does not display anything', () => {
      expect(fixture.nativeElement.children.length).toEqual(0);
    });
  });
  describe('when a new suggestionsResponse is received', () => {
    beforeEach(fakeAsync(() => {
     suggestionService.emitSuggestions();
     // The first change detection tells the view to render the new suggestions
     fixture.detectChanges();
     // Flush async activity (the settimeout call in the component)
     tick();
     // Another change detection cycle is needed for the view to update and expand the panel
     fixture.detectChanges();
    }));

    it('expands the first panel', async(() => {
      const firstExpansionPanel =
        fixture.debugElement.query(By.css('mat-expansion-panel'))
                            .nativeElement;
      // The first action's label will be present if the mat-action-row is visible
      expect(firstExpansionPanel.innerText).toContain('Action 1');
    }));
  });
});
