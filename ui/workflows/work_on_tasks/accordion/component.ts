import {Component, Inject} from '@angular/core';

import {Observable} from 'rxjs';

import {TASK_SUGGESTION_SERVICE} from 'ui/tasks_module/injection_tokens/task_suggestion_service';

import {Task} from 'ui/tasks_module/interfaces/task';
import {TaskSuggestionEngine} from 'ui/tasks_module/interfaces/task_suggestion_engine';


// A work-on-tasks workflow powered by an Angular Material expansion panel
@Component({
  selector: 'cyber-ui-work-on-tasks-accordion-workflow',
  templateUrl: './component.html',
})
export class CyberUiWorkOnTasksAccordionWorkflowComponent {

  tasks: Observable<Task[]>;

  constructor(
    @Inject(TASK_SUGGESTION_SERVICE) readonly taskSuggestionService: TaskSuggestionEngine,
  ) {
    this.tasks = taskSuggestionService.getSuggestions({});
  }

}
