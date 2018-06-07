// Data for the demo
import {Router} from '@angular/router';
import {MatSnackBar} from '@angular/material';

import {Task} from 'ui/tasks_module/interfaces/task';
import {TaskSuggestion} from 'ui/tasks_module/interfaces/task_suggestion';


// Context needed to define the actions for the demo tasks
export interface DemoTaskActionsContext {
  router: Router;
  snackBar: MatSnackBar;
}


// Some tasks that can be used to demo the various task displays
export function getDemoTasks(context: DemoTaskActionsContext): Task[] {
  return [
    {
      label: 'Support development of Cyber UI on Patreon',
      actions: [
        {
          label: 'BECOME A PATRON',
          handler: () => window.location.href = 'https://www.patreon.com/pshields/overview'
        }
      ]
    },
    {
      label: 'Check out the cyber-ui-minimal-task-display component',
      actions: [
        {
          label: 'MARK COMPLETE',
          handler: () => context.snackBar.open('Marked complete'),
        },
        {
          label: 'SNOOZE',
          handler: () => context.snackBar.open('Snoozed'),
        }
      ]
    },
    {
      label: 'Check out some of the other demo components',
      actions: [
        {
          label: 'cyber-ui-form-fields',
          handler: () => context.router.navigateByUrl('/components/form-fields'),
        },
        {
          label: 'SEE COMPONENT LIST',
          handler: () => context.router.navigateByUrl('/components'),
        }
      ]
    }
  ];
}

// Similar to getDemoTasks but returns a TaskSuggestion[]
export function getDemoTaskSuggestions(context: DemoTaskActionsContext): TaskSuggestion[] {
  return getDemoTasks(context).map(task => {
    return {
      task: task
    };
  });
}
