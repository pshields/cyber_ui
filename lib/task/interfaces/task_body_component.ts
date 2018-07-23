import {Task} from './task';


export interface TaskBodyComponent<TASK_T extends Task> {
  task: TASK_T;
}
