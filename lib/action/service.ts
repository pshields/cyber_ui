import {Injectable} from '@angular/core';

import {Subject, Observable} from 'rxjs';

import {Action} from './defs/action';
import {ActionTaken} from './defs/action_taken';


@Injectable({providedIn: 'root'})
export class CyberUiActionService {

  // Stream of actions taken
  private readonly _actionsTaken = new Subject<ActionTaken>();
  actionsTaken: Observable<ActionTaken> = this._actionsTaken;

  logActionTaken(action: Action) {
    this._actionsTaken.next({
      action: action,
    });
  }

}
