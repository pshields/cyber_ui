import {Injectable} from '@angular/core';

import {MatDialog} from "@angular/material" ;

import {CyberUiSnoozeReasonCollectionDialogComponent} from './component';


// Note: this will probably eventually live somewhere else
const DEFAULT_SNOOZE_REASONS = [
  // This reason indicates the task needs to be further refined
  'It needs to be refined',
  // This reason indicates that the reason was circumstantial rather
  // than due to an intrinsic property of the task
  "It's circumstantially suboptimal",
  // This indicates that the snoozed item was not as impotant as it
  // was deemed by the system, and should be demoted in the suggestions
  "It's a bad suggestion",
];


@Injectable({
  providedIn: 'root',
})
export class CyberUiSnoozeReasonCollectionDialogService {

  constructor(
    readonly matDialog: MatDialog,
  ) {}

  // Opens a snooze reason collection dialog, and returns a Promise which will emit the result
  open(reasons = DEFAULT_SNOOZE_REASONS): Promise<string|undefined> {
    return this.matDialog.open(CyberUiSnoozeReasonCollectionDialogComponent, {
      data: {reasons},
    }).afterClosed().toPromise();
  }
}
