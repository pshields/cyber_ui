import {Component, Input, ViewChild} from '@angular/core';


import {Task} from '../../interfaces/task';
import {MatExpansionPanel} from '@angular/material';


// A relatively minimal display component for a Task as a Material expansion panel
@Component({
  selector: 'cyber-ui-minimal-task-expansion-panel',
  templateUrl: './component.html',
})
export class CyberUiMinimalTaskExpansionPanelComponent<TASK_T extends Task> {
  // A reference to the underlying expansion panel, to e.g. open it from a parent component
  @ViewChild(MatExpansionPanel) panel: MatExpansionPanel;
  // The task to display in the expansion panel
  @Input() task: TASK_T;
}
