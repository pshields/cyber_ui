import {Component, HostBinding} from '@angular/core';
import {ActivatedRoute} from '@angular/router';

import {CyberUiThemeService} from 'lib/public_api';


export class Interface {
  // The id/slug of the interface (used in the URL)
  id: string;
  // The interface's symbol name
  label: string;
  // The repository-relative filename where the interface is defined
  definedIn: string;
}


// The list of interfaces that Cyber UI has documentation about
export const INTERFACES = [
  {
    id: 'task',
    label: 'Task',
    definedIn: 'lib/task/interfaces/task.ts'
  },
  {
    id: 'cyber-ui-action-context',
    label: 'CyberUiActionContext',
    definedIn: 'lib/task/interfaces/action_context.ts'
  }
];


@Component({
  selector: 'interfaces-documentation',
  templateUrl: './component.html',
  styleUrls: ['./component.scss'],
})
export class InterfacesDocumentationComponent {
  // The ID of the interface to show documentation about (taken from the route)
  interfaceId: string;
  // The interface object
  interface: Interface;
  // The color of the primary text content on page
  // (dynamic based on theme settings)
  @HostBinding('style.color') color: string;

  constructor(
    route: ActivatedRoute,
    readonly themeService: CyberUiThemeService,
) {
    route.params.subscribe(params => {
      this.interfaceId = params.id;
      this.interface = INTERFACES.find(obj => obj.id === this.interfaceId);
    });
    // Update the text color based on the current theme settings
    themeService.textColor.subscribe(color => {
      this.color = color;
    });
  }
}
