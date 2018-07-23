import {Component, Input} from '@angular/core';


import {Task} from '../../interfaces/task';


// A relatively minimal display component for a Task as a Material card
@Component({
  selector: 'cyber-ui-minimal-task-card',
  templateUrl: './component.html',
  styleUrls: ['./component.scss'],
})
export class CyberUiMinimalTaskCardComponent<TASK_T extends Task> {
  @Input() task: TASK_T;
}
