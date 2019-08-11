import {Injectable, EventEmitter} from '@angular/core';


@Injectable({providedIn: 'root'})
export class CyberUiWorkOnTasksWorkflowService {
  reloadEvents = new EventEmitter<void>();

  // Force a reload of the suggestions
  reloadSuggestions() {
    this.reloadEvents.emit();
  }

}
