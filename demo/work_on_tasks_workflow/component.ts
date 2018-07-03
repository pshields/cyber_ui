import {Component} from '@angular/core';

import {CyberUiTaskAccordionComponent} from 'ui/tasks_module/displays/accordion/component';
import {ChoiceField, Option} from 'ui/forms_module/fields/choice';


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

  demoSettingsFields = [
    new ChoiceField({
      label: 'Display component',
      propertyName: 'displayComponent',
      options: [
        new Option('Accordion', CyberUiTaskAccordionComponent)
      ],
    })
  ];
}
