import {Injectable, EventEmitter} from '@angular/core';

import {ReplaySubject, Observable} from 'rxjs';
import {map} from 'rxjs/operators';

import * as RandExp from 'randexp';

import {RegisterTopicsOptions} from './defs/register_topics_options';
import {RegisterTopicsResponse} from './defs/register_topics_response';
import {CyberUiMindfullyAttendToTopicTask} from './defs/task';
import {CyberUiMindfullyAttendToTopicUserResponseEvent} from './defs/user_response_event';

import {CyberUiTopicRegistration} from './topic_registration';


// A human readable label describing this provider
export const CYBER_UI_MINDFULLY_ATTEND_TO_TOPIC_TASK_PROVIDER_LABEL = 'Mindful attention to topics';

// A string identifier of this provider for use in e.g. settings lists
export const CYBER_UI_MINDFULLY_ATTEND_TO_TOPIC_TASK_PROVIDER_ID = 'CYBER_UI_MINDFULLY_ATTEND_TO_TOPIC_TASK_PROVIDER';

// The regexp used to stochastically generate the primary action label
const PRIMARY_ACTION_LABEL_GENERATOR_REGEX = /(OK, LET'S GO|I'M READY|GET STARTED|START (IT|TIMEBOX|SESSION|HARD FOCUS SESSION))(!)?/;

// The regexp used to stochastically generate the secondary action label
const SKIP_ACTION_LABEL_GENERATOR_REGEX = /NAH|NOT RIGHT NOW/;



// The regexp used to stochastically generate the task label
const TASK_LABEL_GENERATOR_REGEX = /(Start|Spend) a( 50-minute)? hard focus session( with the intention of)? mindfully attending to TOPIC_LABEL_TOKEN(, and log follow-ups as appropriate)?/;


// Provides tasks around mindfully attending to topics
// Example task statement:
// Start a 50-minute hard focus session with the intention to mindfully attend to systemization, and log follow-ups as appropriate
@Injectable({providedIn: 'root'})
export class CyberUiMindfullyAttendToTopicTaskProvider {
  responses = new EventEmitter<CyberUiMindfullyAttendToTopicUserResponseEvent>();

  private topicRegistrations: CyberUiTopicRegistration[] = [];
  // A copy of the list of topic registrations for external consumers
  private topicRegistrationsSubject = new ReplaySubject<CyberUiTopicRegistration[]>(1);
  private tasks = new ReplaySubject<CyberUiMindfullyAttendToTopicTask[]>(1);
  private primaryActionLabelRandExp = new RandExp(PRIMARY_ACTION_LABEL_GENERATOR_REGEX);
  private skipActionLabelRandExp = new RandExp(SKIP_ACTION_LABEL_GENERATOR_REGEX);
  private taskLabelRandExp = new RandExp(TASK_LABEL_GENERATOR_REGEX);

  constructor() {
    // Initialize the tasks observable with an empty list
    // This way, the task provider won't wait indefinitely to receive a response
    // from this task provider, if no topics have been registered
    this.tasks.next([]);
    // Initialize the registrations observable with an empty list, to reflect the initial state
    this.topicRegistrationsSubject.next([]);
  }

  // Registers topics with the provider
  registerTopics(options: RegisterTopicsOptions): RegisterTopicsResponse {
    for (let topicOptions of options.topics) {
      const topicRegistration = new CyberUiTopicRegistration(topicOptions);
      this.topicRegistrations.push(topicRegistration);
    }
    // Update the list of topic registrations that consumers might be listening to
    // Note: .slice() makes a shallow copy of the original array
    this.topicRegistrationsSubject.next(this.topicRegistrations.slice());
    // Update the list of tasks produced by this provider
    this.updateTasks();
    return;
  }

  // Utility method to get the current number of topic registrations
  getTopicRegistrationsCount() {
    return this.topicRegistrations.length;
  }

  // Returns the topic registration matching the given slug
  getTopicRegistrationFromSlug(slug: string): CyberUiTopicRegistration {
    return this.topicRegistrations.find(registration => registration.slug === slug);
  }

  // Returns an observable of the current list of topic registrations
  getTopicRegistrations(): Observable<CyberUiTopicRegistration[]> {
    return this.topicRegistrationsSubject;
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
    const tasks: CyberUiMindfullyAttendToTopicTask[] = [];
    this.topicRegistrations.forEach(topicRegistration => {
      const label = this.getTaskLabelForTopic(topicRegistration);
      tasks.push({
        label: label,
        actions: this.getActions(label, topicRegistration),
        topic: topicRegistration,
      })
    });
    this.tasks.next(tasks);
  }

  private getActions(taskLabel: string, topicRegistration: CyberUiTopicRegistration) {
    const actions = [];
    const primaryAction = {
      label: this.getPrimaryActionLabel(),
      handler: () => {
        this.responses.next({
          taskLabel: taskLabel,
          actionLabel: primaryAction.label,
          canonicalActionSlug: 'proceed',
          topicRegistration: topicRegistration
        });
      }
    };
    actions.push(primaryAction);
    const skipAction = {
      label: this.getSkipActionLabel(),
      handler: () => {
        this.responses.next({
          taskLabel: taskLabel,
          actionLabel: skipAction.label,
          canonicalActionSlug: 'skip',
          topicRegistration: topicRegistration
        });
      }
    };
    actions.push(skipAction);
    return actions;
  }

  private getTaskLabelForTopic(topic: CyberUiTopicRegistration) {
    return this.taskLabelRandExp.gen().replace('TOPIC_LABEL_TOKEN', topic.labelWhenUsedInASentence);
  }

  private getPrimaryActionLabel() {
    return this.primaryActionLabelRandExp.gen();
  }

  private getSkipActionLabel() {
    return this.skipActionLabelRandExp.gen();
  }

  // For convenience, store the task provider's suggested id as a static class property
  static readonly id = CYBER_UI_MINDFULLY_ATTEND_TO_TOPIC_TASK_PROVIDER_ID;
}
