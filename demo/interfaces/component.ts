import {Component} from '@angular/core';
import {ActivatedRoute} from '@angular/router';


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
  // The ID if the interface to show documentation about (taken from the route)
  interfaceId: string;
  // The interface object
  interface: Interface;

  constructor(route: ActivatedRoute) {
    route.params.subscribe(params => {
      this.interfaceId = params.id;
      this.interface = INTERFACES.find(obj => obj.id === this.interfaceId);
    });
  }
}
