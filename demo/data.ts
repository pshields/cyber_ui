// Data for the demo
import {Router} from '@angular/router';
import {MatSnackBar} from '@angular/material';


// Context needed to define the actions for the demo tasks
export interface DemoTaskActionsContext {
  router: Router;
  snackBar: MatSnackBar;
}


// Some tasks that can be used to demo the various task displays
export function getDemoTasks(context: DemoTaskActionsContext) {
  return [
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
