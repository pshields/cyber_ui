// Data for the demo
import {Router} from '@angular/router';
import {MatSnackBar} from '@angular/material';

import {Task} from 'lib/task/interfaces/task';
import {TaskSuggestion} from 'lib/task/interfaces/task_suggestion';

import {delegationMenuActivationHandler} from 'lib/public_api';


// Context needed to define the actions for the demo tasks
export interface DemoTaskActionsContext {
  router: Router;
  snackBar: MatSnackBar;
}


function getDemoTaskActions(context: DemoTaskActionsContext) {
  return [
    {
      label: 'MARK COMPLETE (ACTIVATES SNACK BAR)',
      handler: () => context.snackBar.open('Marked complete'),
    },
    {
      label: 'SNOOZE (ACTIVATES SNACK BAR)',
      handler: () => context.snackBar.open('Snoozed'),
    },
    {
      label: 'DELEGATE TO...',
      handler: delegationMenuActivationHandler,
    }
  ];
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
          handler: () => window.open('https://www.github.com/pshields/cyber_ui', '_blank')
        }
      ]
    },
    {
      label: 'Example task ABC123',
      actions: getDemoTaskActions(context),
    },
    {
      label: 'Example task DEF456',
      actions: getDemoTaskActions(context),
    },
    {
      label: 'Example task GHI789',
      actions: getDemoTaskActions(context),
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
