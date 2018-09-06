import {Component, Inject} from '@angular/core';

import {MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';


@Component({
  selector: 'cyber-ui-snooze-reason-collection-dialog',
  templateUrl: './component.html',
  styleUrls: ['./component.scss'],
})
export class CyberUiSnoozeReasonCollectionDialogComponent {
  // The dialog title to show
  title: string;

  // TODO: Should Reason be a class/interface?
  reasons: string[];

  constructor(
    readonly dialogRef: MatDialogRef<CyberUiSnoozeReasonCollectionDialogComponent, string|undefined>,
    @Inject(MAT_DIALOG_DATA) readonly data
  ) {
    // TODO Once we have a reference to the snoozed entity's primary characterization
    // (e.g. 'task', 'project', etc.) update the title below to use
    // "Why did you snooze this {{characterization}}?"
    this.title = 'Why did you snooze this?';
    this.reasons = data.reasons;
  }
}
