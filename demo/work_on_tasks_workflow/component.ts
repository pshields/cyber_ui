import {Component, Inject} from '@angular/core';

import {CYBER_UI_MINDFULLY_ATTEND_TO_TOPIC_TASK_PROVIDER_ID} from 'lib/public_api';
import {CYBER_UI_MINDFULLY_ATTEND_TO_TOPIC_TASK_PROVIDER_LABEL} from 'lib/public_api';
import {CyberUiMinimalTaskCardListComponent} from 'lib/public_api';
import {CyberUiMinimalTaskListComponent} from 'lib/public_api';
import {CyberUiTaskAccordionComponent} from 'lib/public_api';
import {CyberUiActionsPanelComponent} from 'lib/public_api';
import {CyberUiResponseChipsComponent} from 'lib/public_api';
import {ChoiceField, Option} from 'lib/public_api';
import {TASK_SUGGESTION_SERVICE} from 'lib/public_api';

import {DemoTaskSuggestionService} from '../task_suggestion_service/service';


@Component({
  selector: 'work-on-tasks-workflow-demo',
  templateUrl: './component.html',
  styleUrls: ['./component.scss'],
})
export class WorkOnTasksWorkflowDemoComponent {
  self = this;  // allow for referencing the host class from the template

  // The display component to use to display tasks
  displayComponent = CyberUiMinimalTaskListComponent;
  // The display component to use to display task actions
  actionsDisplayComponent = CyberUiResponseChipsComponent;
  // The list of task providers to use
  taskProviders = [
    CYBER_UI_MINDFULLY_ATTEND_TO_TOPIC_TASK_PROVIDER_ID
  ];

  constructor(
    @Inject(TASK_SUGGESTION_SERVICE) readonly taskSuggestionService: DemoTaskSuggestionService
  ) {
    // Load the initial demo settings (e.g. actions display component)
    this.onDemoSettingsChange();
  }

  demoSettingsFields = [
    new ChoiceField({
      label: 'Display component',
      propertyName: 'displayComponent',
      options: [
        new Option('Accordion', CyberUiTaskAccordionComponent),
        new Option('Card list', CyberUiMinimalTaskCardListComponent),
        new Option('List', CyberUiMinimalTaskListComponent)
      ] as Option<any>[],
    }),
    new ChoiceField({
      label: 'Task actions display component',
      propertyName: 'actionsDisplayComponent',
      options: [
        new Option('Default', '' as any),
        new Option('CyberUiTaskActionPanel', CyberUiActionsPanelComponent),
        new Option('CyberUiResponseChips', CyberUiResponseChipsComponent),
      ]
    }),
    new ChoiceField({
      label: 'Task providers',
      propertyName: 'taskProviders',
      options: [
        new Option(CYBER_UI_MINDFULLY_ATTEND_TO_TOPIC_TASK_PROVIDER_LABEL, CYBER_UI_MINDFULLY_ATTEND_TO_TOPIC_TASK_PROVIDER_ID),
      ],
      multiple: true,
    })
  ];

  demoFilters = [
    new ChoiceField({
      label: 'Difficulty',
      propertyName: 'difficulty',
      options: [
        new Option('Easy', 'easy'),
        new Option('Medium', 'medium'),
        new Option('Hard', 'hard'),
      ]
    }),
    new ChoiceField({
      label: 'Location',
      propertyName: 'location',
      options: [
        new Option('Home', 'home'),
        new Option('Work', 'work'),
      ]
    }),
    // TODO Convert this to a value in range field once that is supported in filter chips component
    new ChoiceField({
      label: 'Time limit',
      propertyName: 'timeLimit',
      options: [
        new Option('5 minutes', 5),
        new Option('1 hour', 60),
      ]
    }),
  ];
  demoFilterSettings = {};

  onDemoSettingsChange() {
    this.taskSuggestionService.setActionsDisplayComponent(this.actionsDisplayComponent);
  }
}
