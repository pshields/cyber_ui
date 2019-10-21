import {Component, Inject} from '@angular/core';

import {MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import {TextField} from '../../form/field/text/field';


@Component({
  selector: 'cyber-ui-snooze-reason-collection-dialog',
  templateUrl: './component.html',
  styleUrls: ['./component.scss'],
})
export class CyberUiSnoozeReasonCollectionDialogComponent {
  // Allow referencing the component from the template in order to achieve
  // the model binding for the custom snooze reason
  self = this;

  // The dialog title to show
  title: string;

  // TODO: Should Reason be a class/interface?
  reasons: string[];

  // The field to use if the user wishes to provide a custom snooze reason
  customReasonField = new TextField({
    label: 'Custom reason',
    propertyName: 'customReason',
    autofocus: true,
    saveOnEnter: true,
  });

  // The custom reason field will be bound to this property
  customReason: string;

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
