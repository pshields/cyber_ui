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
      label: 'Support development of Cyber UI',
      actions: [
        {
          label: 'BECOME A PATRON',
          handler: () => window.open('https://www.patreon.com/pshields/overview', '_blank')
        },
        {
          label: 'STAR ON GITHUB',
          handler: () => window.open('https://www.github.com/pshields/cyber_ui')
        }
      ]
    },
    {
      label: 'Learn more about the interfaces used in Cyber UI',
      actions: [
        {
          label: 'LEARN ABOUT TASK INTERFACE',
          handler: () => context.router.navigateByUrl('/interfaces/task'),
        }
      ]
    },
    {
      label: 'Example task ABC123',
      actions: [
        {
          label: 'MARK COMPLETE (ACTIVATES SNACK BAR)',
          handler: () => context.snackBar.open('Marked complete'),
        },
        {
          label: 'SNOOZE (ACTIVATES SNACK BAR)',
          handler: () => context.snackBar.open('Snoozed'),
        }
      ]
    },
    {
      label: 'Example task DEF456',
      actions: [
        {
          label: 'MARK COMPLETE (ACTIVATES SNACK BAR)',
          handler: () => context.snackBar.open('Marked complete'),
        },
        {
          label: 'SNOOZE (ACTIVATES SNACK BAR)',
          handler: () => context.snackBar.open('Snoozed'),
        }
      ]
    },
    {
      label: 'Example task GHI789',
      actions: [
        {
          label: 'MARK COMPLETE (ACTIVATES SNACK BAR)',
          handler: () => context.snackBar.open('Marked complete'),
        },
        {
          label: 'SNOOZE (ACTIVATES SNACK BAR)',
          handler: () => context.snackBar.open('Snoozed'),
        }
      ]
    },
  ];
}

// Similar to getDemoTasks but returns a TaskSuggestion[]
export function getDemoTaskSuggestions(context: DemoTaskActionsContext): TaskSuggestion<Task>[] {
  return getDemoTasks(context).map(task => {
    return {
      task: task
    };
  });
}
