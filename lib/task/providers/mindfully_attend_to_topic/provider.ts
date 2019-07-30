import {ReplaySubject} from 'rxjs';
import {map} from 'rxjs/operators';

import * as RandExp from 'randexp';

import {Task} from '../../interfaces/task';

import {RegisterTopicsOptions} from './defs/register_topics_options';
import {RegisterTopicsResponse} from './defs/register_topics_response';

import {TopicRegistration} from './topic_registration';


// A human readable label describing this provider
export const CYBER_UI_MINDFULLY_ATTEND_TO_TOPIC_TASK_PROVIDER_LABEL = 'Mindful attention to topics';

// A string identifier of this provider for use in e.g. settings lists
export const CYBER_UI_MINDFULLY_ATTEND_TO_TOPIC_TASK_PROVIDER_ID = 'CYBER_UI_MINDFULLY_ATTEND_TO_TOPIC_TASK_PROVIDER';

// The regexp used to stochastically generate the primary action label
const PRIMARY_ACTION_LABEL_GENERATOR_REGEX = /(OK, LET'S GO|I'M READY|START (IT|TIMEBOX|SESSION|HARD FOCUS SESSION))(!)?/;

// The regexp used to stochastically generate the task label
const TASK_LABEL_GENERATOR_REGEX = /(Start|Spend) a( 50-minute)? hard focus session mindfully attending to TOPIC_LABEL_TOKEN(, and log follow-ups as appropriate)?/;


// Provides tasks around mindfully attending to topics
// Example task statement:
// Start a 50-minute hard focus session with the intention to mindfully attend to systemization, and log follow-ups as appropriate
export class CyberUiMindfullyAttendToTopicTaskProvider {
  private topicRegistrations: TopicRegistration[] = [];
  private tasks = new ReplaySubject<Task[]>(1);
  private primaryActionLabelRandExp = new RandExp(PRIMARY_ACTION_LABEL_GENERATOR_REGEX);
  private taskLabelRandExp = new RandExp(TASK_LABEL_GENERATOR_REGEX);

  constructor() {
    // Initialize the tasks observable with an empty list
    // This way, the task provider won't wait indefinitely to receive a response
    // from this task provider, if no topics have been registered
    this.tasks.next([]);
  }

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
        label: this.getTaskLabelForTopic(topicRegistration),
        actions: [
          {
            label: this.getPrimaryActionLabel(),
            handler: () => {},
          }
        ]
      })
    });
    this.tasks.next(tasks);
  }

  private getTaskLabelForTopic(topic: TopicRegistration) {
    return this.taskLabelRandExp.gen().replace('TOPIC_LABEL_TOKEN', topic.labelWhenUsedInASentence);
  }

  private getPrimaryActionLabel() {
    return this.primaryActionLabelRandExp.gen();
  }

  static readonly id = CYBER_UI_MINDFULLY_ATTEND_TO_TOPIC_TASK_PROVIDER_ID;
}
