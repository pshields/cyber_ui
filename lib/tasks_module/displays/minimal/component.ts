import {Component, Input} from '@angular/core';


import {Task} from '../../interfaces/task';


// An experimental, minimal display component for a Task
// This component is both minimally styled and shows minimal information (just label and actions for now)
// This is more of a proof of concept for experimenting with what minimally defines a task
@Component({
  selector: 'cyber-ui-minimal-task-display',
  templateUrl: './component.html',
})
export class CyberUiMinimalTaskDisplayComponent<TASK_T extends Task> {
  @Input() task: TASK_T;
}
