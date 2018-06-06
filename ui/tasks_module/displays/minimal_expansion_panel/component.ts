import {Component, Input} from '@angular/core';


import {Task} from '../../interfaces/task';


// A relatively minimal display component for a Task as a Material expansion panel
@Component({
  selector: 'cyber-ui-minimal-task-expansion-panel',
  templateUrl: './component.html',
})
export class CyberUiMinimalTaskExpansionPanelComponent<TASK_T extends Task> {
  @Input() task: TASK_T;
}
