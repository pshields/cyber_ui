import {EventEmitter, Injectable} from '@angular/core';

import {CyberUiAddThingWorkflowExitEvent} from './exit.event';


@Injectable({
  providedIn: 'root'
})
export class CyberUiAddThingWorkflowService {
  // Stream of exit events indicating when the workflow is finished
  exits = new EventEmitter<CyberUiAddThingWorkflowExitEvent>();

  exitWorkflow(options = {}) {
    this.exits.emit(options);
  }
}