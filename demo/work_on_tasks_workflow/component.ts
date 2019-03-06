import {Component, Inject} from '@angular/core';

import {CyberUiMinimalTaskCardListComponent} from 'lib/public_api';
import {CyberUiTaskAccordionComponent} from 'lib/public_api';
import {CyberUiActionsPanelComponent} from 'lib/public_api';
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
  // TODO Eventually demonstrate swapping this dynamically using a choicefield
  displayComponent = CyberUiMinimalTaskCardListComponent;
  // The display component to use to display task actions
  actionsDisplayComponent = CyberUiActionsPanelComponent;

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
      ] as Option<any>[],
    }),
    new ChoiceField({
      label: 'Task actions display component',
      propertyName: 'actionsDisplayComponent',
      options: [
        new Option('Default', '' as any),
        new Option('CyberUiTaskActionPanel', CyberUiActionsPanelComponent)
      ]
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
  ];

  onDemoSettingsChange() {
    this.taskSuggestionService.setActionsDisplayComponent(this.actionsDisplayComponent);
  }
}
