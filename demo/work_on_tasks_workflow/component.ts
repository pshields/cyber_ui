import {Component, Inject} from '@angular/core';

import {CyberUiTaskAccordionComponent} from 'lib/task/displays/accordion/component';
import {CyberUiActionsPanelComponent} from 'lib/task/displays/action_panel/component';
import {ChoiceField, Option} from 'lib/form/fields/choice';
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
  displayComponent = CyberUiTaskAccordionComponent;
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
        new Option('Accordion', CyberUiTaskAccordionComponent)
      ],
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

  onDemoSettingsChange() {
    this.taskSuggestionService.setActionsDisplayComponent(this.actionsDisplayComponent);
  }
}
