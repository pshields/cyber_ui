import {ReplaySubject} from 'rxjs';
import {map} from 'rxjs/operators';

import {Task} from '../../interfaces/task';

import {RegisterTopicsOptions} from './defs/register_topics_options';
import {RegisterTopicsResponse} from './defs/register_topics_response';

import {TopicRegistration} from './topic_registration';


// A human readable label describing this provider
export const CYBER_UI_MINDFULLY_ATTEND_TO_TOPIC_TASK_PROVIDER_LABEL = 'Mindful attention to topics';

// A string identifier of this provider for use in e.g. settings lists
export const CYBER_UI_MINDFULLY_ATTEND_TO_TOPIC_TASK_PROVIDER_ID = 'CYBER_UI_MINDFULLY_ATTEND_TO_TOPIC_TASK_PROVIDER';


// Provides tasks around mindfully attending to topics
// Example task statement:
// Start a 50-minute hard focus session with the intention to mindfully attend to systemization, and log follow-ups as appropriate
export class CyberUiMindfullyAttendToTopicTaskProvider {
  private topicRegistrations: TopicRegistration[] = [];
  private tasks = new ReplaySubject<Task[]>(1);

  // Registers topics with the provider
  registerTopics(options: RegisterTopicsOptions): RegisterTopicsResponse {
    for (let topicOptions of options.topics) {
      const topicRegistration = new TopicRegistration(topicOptions);
      this.topicRegistrations.push(topicRegistration);
    }
    // Update the list of tasks produced by this provider
    this.updateTasks();
    return;
  }

  // Utility method to get the current number of topic registrations
  getTopicRegistrationsCount() {
    return this.topicRegistrations.length;
  }

  getTasks() {
    return this.tasks.pipe(map(tasks => {
      return {
        tasks: tasks
      };
    }))
  }

  // Updates the list of tasks produced by this provider, in response to a change in topic registrations
  private updateTasks() {
    const tasks: Task[] = [];
    this.topicRegistrations.forEach(topicRegistration => {
      tasks.push({
        label: `Spend a 50-minute hard focus session attending to ${topicRegistration.labelWhenUsedInASentence}, and log follow-ups as appropriate`
      })
    });
    this.tasks.next(tasks);
  }

}
