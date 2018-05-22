import {Observable} from 'rxjs';

import {Task} from './task';
import {TaskEngineSettings} from './task_engine_settings';


export interface TaskProvider {
  getTasks(settings: TaskEngineSettings): Observable<Task[]>;
}
