import {Component, HostBinding} from '@angular/core';
import {ActivatedRoute} from '@angular/router';

import {CyberUiThemeService} from 'lib/public_api';


export class TaskProviderDocumentation {
  // The id/slug of the task provider (used in the URL)
  id: string;
  // The task provider's class name
  className: string;
}


// The list of interfaces that Cyber UI has documentation about
export const TASK_PROVIDER_DOCUMENTATION_OBJECTS = [
  {
    id: 'mindfully-attend-to-topic',
    className: 'CyberUiMindfullyAttendToTopicTaskProvider',
  }
];


@Component({
  selector: 'task-providers-documentation',
  templateUrl: './component.html',
  styleUrls: ['./component.scss'],
})
export class TaskProvidersDocumentationComponent {
  // The ID of the task provider to show documentation about (taken from the route)
  taskProviderId: string;
  // The task provider documentation object
  documentation: TaskProviderDocumentation;
  // The color of the primary text content on page
  // (dynamic based on theme settings)
  @HostBinding('style.color') color: string;

  constructor(
      route: ActivatedRoute,
      readonly themeService: CyberUiThemeService,
  ) {
    route.params.subscribe(params => {
      this.taskProviderId = params.id;
      this.documentation = TASK_PROVIDER_DOCUMENTATION_OBJECTS.find(obj => obj.id === this.taskProviderId);
    })
    // Update the text color based on the current theme settings
    themeService.textColor.subscribe(color => {
      this.color = color;
    });
  }
}
