import {Component} from '@angular/core';

import {Observable} from 'rxjs';

import {Task} from '../../interfaces/task';


@Component({
  selector: 'cyber-ui-minimal-task-list',
  templateUrl: './component.html',
  styleUrls: ['./component.scss'],
})
export class CyberUiMinimalTaskListComponent {
  tasks: Observable<Task[]>;
}
