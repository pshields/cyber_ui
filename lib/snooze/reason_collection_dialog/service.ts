import {Injectable} from '@angular/core';

import {MatDialog} from '@angular/material/dialog';

import {CyberUiSnoozeReasonCollectionDialogComponent} from './component';
import {CYBER_UI_SNOOZE_REASON_ONTOLOGY} from './snooze_reason_ontology';


// Note: this will probably eventually live somewhere else
const DEFAULT_SNOOZE_REASONS = CYBER_UI_SNOOZE_REASON_ONTOLOGY.map(reason => reason.label);


@Injectable({
  providedIn: 'root',
})
export class CyberUiSnoozeReasonCollectionDialogService {

  constructor(
    readonly matDialog: MatDialog,
  ) {}

  // TODO Allow for specifying whether to show the custom reason field or not
  // Opens a snooze reason collection dialog, and returns a Promise which will emit the result
  open(reasons = DEFAULT_SNOOZE_REASONS): Promise<string|undefined> {
    return this.matDialog.open<
      CyberUiSnoozeReasonCollectionDialogComponent,
      {reasons: string[]},
      string|undefined
    >(CyberUiSnoozeReasonCollectionDialogComponent, {
      data: {reasons},
    }).afterClosed().toPromise();
  }
}
