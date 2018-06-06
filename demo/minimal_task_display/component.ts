import {Component} from '@angular/core';
import {Router} from '@angular/router';
import {Task} from 'ui/tasks_module/interfaces/task';


@Component({
  templateUrl: './component.html',
})
export class MinimalTaskDisplayDemoComponent {
  constructor(private router: Router) {}

  tasks: Task[] = [
    {
      label: 'Check out the cyber-ui-minimal-task-display component',
      actions: [
        {
          label: 'Mark complete',
          handler: () => null,
        },
        {
          label: 'Snooze',
          handler: () => null,
        }
      ]
    },
    {
      label: 'Check out some of the other demo components',
      actions: [
        {
          label: 'cyber-ui-form-fields',
          handler: () => this.router.navigateByUrl('/components/form-fields'),
        },
        {
          label: 'SEE COMPONENT LIST',
          handler: () => this.router.navigateByUrl('/components'),
        }
      ]
    }
  ];
}
