import {Observable, ReplaySubject} from 'rxjs';
import {map} from 'rxjs/operators';

import {Task} from '../../interfaces/task';
import {TaskProvider} from '../../interfaces/task_provider';
import {TaskProviderGetTasksOptions} from '../../interfaces/task_provider';
import {TaskProviderGetTasksResponse} from '../../interfaces/task_provider';


// Converts a thing to be worked on into a task for working on that thing
function convertThingToBeWorkedOnIntoTask(thing: ThingToBeWorkedOn): Task {
  // The characterization can be customized by storing a string value at thing.characterization
  // Otherwise, the word 'thing' will be used
  const thingCharacterization: string = thing.characterization ? thing.characterization : 'thing';

  return {
    label: `Work on ${thingCharacterization}: ${thing.label}`
  }
}


// A generic task provider for working on 'things'
// Provides tasks of the form "Work on [thing_characterization]: [thing_label]"
export class CyberUiWorkOnThingTaskProvider implements TaskProvider {
  // The tasks corresponding to the things to be worked on
  tasks = new ReplaySubject<Task[]>(1);

  getTasks(options: TaskProviderGetTasksOptions): Observable<TaskProviderGetTasksResponse> {
    return this.tasks.pipe(map(tasks => {
      return {
        tasks: tasks
      }
    }));
  }

  // For now, registering only a single source of things is supported
  // We should probably support registering multiple sources
  // TODO Do that and add tests
  registerDataSource(source: Observable<ThingToBeWorkedOn[]>) {
    source.subscribe(things => {
      const tasks = things.map(thing => convertThingToBeWorkedOnIntoTask(thing));
      this.tasks.next(tasks)
    });
  }
}


// (In progress) interface for things that can be worked on
export interface ThingToBeWorkedOn {
  // The label of the thing to be worked on
  label?: string;
  // The characterization of this thing ('resource', 'project', 'idea', etc.)
  characterization?: string;
}
