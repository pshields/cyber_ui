// Data for the demo
import {Router} from '@angular/router';
import {MatSnackBar} from '@angular/material/snack-bar';

import {Task} from 'lib/task/interfaces/task';

import {Action} from 'lib/public_api';
import {CyberUiSnoozeReasonCollectionDialogService} from 'lib/public_api';
import {delegationMenuActivationHandler} from 'lib/public_api';

import * as colors from './defs/colors';

import {DemoTaskProvider} from './task_suggestion_service/demo_task_provider';


// Context needed to define the actions for the demo tasks
export interface DemoTaskActionsContext {
  router: Router;
  snackBar: MatSnackBar;
  snoozeReasonCollectionDialogService: CyberUiSnoozeReasonCollectionDialogService;
  demoTaskProvider: DemoTaskProvider;
}


export class DemoTask {
  actions: any;

  constructor(
    readonly label: string,
    readonly context: DemoTaskActionsContext) {
      this.actions = this.getDemoTaskActions(context);
    }

  getDemoTaskActions(context: DemoTaskActionsContext) {
    return [
      {
        label: 'MARK COMPLETE',
        handler: () => {
          context.demoTaskProvider.markTaskComplete(this);
          context.snackBar.open('Marked complete');
        },
        color: colors.COMPLETION_GREEN,
        iconNames: ['check'],
        prominence: 2,
      },
      {
        label: 'DELEGATE',
        handler: () => context.snackBar.open('Delegated'),
        color: colors.DELEGATION_MAGENTA,
        iconNames: ['supervisor_account'],
      },
      {
        label: 'SNOOZE',
        handler: () => {
          context.snoozeReasonCollectionDialogService.open().then(reason => {
            if (!reason) {
              context.snackBar.open('Snoozed');
            } else {
              context.snackBar.open('Snoozed with reason: ' + reason);
            }
          });
        },
        color: colors.SNOOZE_YELLOW,
        iconNames: ['history'],
      },
      {
        label: 'DELEGATE TO...',
        handler: delegationMenuActivationHandler,
        iconNames: ['supervisor_account'],
        color: colors.DELEGATION_MAGENTA,
      },
      {
        label: 'SNOOZE TO...',
        handler: () => context.snackBar.open('Not yet implemented'),
        color: colors.SNOOZE_YELLOW,
        iconNames: ['history'],
      }
    ];
  }
}


// Some tasks that can be used to demo the various task displays
export function getDemoTasks(context: DemoTaskActionsContext): Task[] {
  const firstTask = {
    label: 'Support development of Cyber UI',
    actions: [
      {
        label: 'STAR ON GITHUB',
        handler: () => window.open('https://www.github.com/pshields/cyber_ui', '_blank'),
        color: colors.GITHUB_GRAY,
        iconNames: ['open_in_new'],
      }
    ] as Action[]
  };
  firstTask.actions = firstTask.actions.concat([
    {
      label: 'MARK COMPLETE',
      handler: () => context.demoTaskProvider.markTaskComplete(firstTask),
      iconNames: ['check'],
      color: colors.COMPLETION_GREEN,
    }
  ]);
  return [
    firstTask,
    new DemoTask('Example task ABCDEFG', context),
    new DemoTask('Example 1234567', context),
    new DemoTask('GHIJ8910', context)
  ];
}
