import {Injectable} from '@angular/core';

import {Subject, Observable} from 'rxjs';

import {Action} from './defs/action';
import {ActionTaken} from './defs/action_taken';
import {CyberUiActionContext} from './defs/action_context';


@Injectable({providedIn: 'root'})
export class CyberUiActionService {

  // Stream of actions taken
  private readonly _actionsTaken = new Subject<ActionTaken>();
  actionsTaken: Observable<ActionTaken> = this._actionsTaken;

  logActionTaken(action: Action, context: CyberUiActionContext) {
    const actionTaken: ActionTaken = {action, context};
    this._actionsTaken.next(actionTaken);
    if (context.viewContainer && context.viewContainer.element.nativeElement) {
      // Emit a custom event up through the DOM from the element that triggered the action
      // This allows ancestors to handle actions taken from their descendants without having
      // to explicitly catch-and-emit the event up through the Angular component hierarchy
      //
      // TODO Consider putting this behind a flag / settings
      const event = new CustomEvent(
        'cyber-ui-action-taken',
        {
          bubbles: true,
          // Ancestors may call event.preventDefault() to indicate that an action taken has been "processed" in some manner
          cancelable: true,
          detail: actionTaken,
        },
      );
      context.viewContainer.element.nativeElement.dispatchEvent(event);
    }
  }

}
