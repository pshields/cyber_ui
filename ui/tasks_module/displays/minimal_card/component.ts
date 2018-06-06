import {Component, Input} from '@angular/core';


import {Task} from 'ui/tasks_module/interfaces/task';


// A relatively minimal display component for a Task as a Material card
@Component({
  selector: 'cyber-ui-minimal-task-card',
  templateUrl: './component.html',
})
export class CyberUiMinimalTaskCardComponent<TASK_T extends Task> {
  @Input() task: TASK_T;
}
