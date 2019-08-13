import {async} from '@angular/core/testing';

import {first} from 'rxjs/operators';

import {Task} from '../../../task/interfaces/task';

import {CyberUiMindfullyAttendToTopicUserResponseEvent} from './defs/user_response_event';

import {CYBER_UI_MINDFULLY_ATTEND_TO_TOPIC_TASK_PROVIDER_ID} from './provider';
import {CyberUiMindfullyAttendToTopicTaskProvider} from './provider';


const EXAMPLE_TOPIC_1 = {
  label: 'Example topic 1',
  importance: 0.5
};


const EXAMPLE_TOPIC_2 = {
  label: 'Example topic 2',
  importance: 0.4
};


const EXAMPLE_TOPICS_LIST = [
  EXAMPLE_TOPIC_1,
  EXAMPLE_TOPIC_2
];


describe('CyberUiMindfullyAttendToTopicTaskProvider', () => {

  let provider: CyberUiMindfullyAttendToTopicTaskProvider;

  beforeEach(() => {
    provider = new CyberUiMindfullyAttendToTopicTaskProvider();
  });

  it('instantiates successfully', () => {
    expect(provider instanceof CyberUiMindfullyAttendToTopicTaskProvider).toBe(true);
  });

  describe('when registering topics', () => {
    it('adds the topics to the list of topic registrations', () => {
      provider.registerTopics({
        topics: EXAMPLE_TOPICS_LIST
      });
      expect(provider.getTopicRegistrationsCount()).toEqual(2);
    });
  });

  describe('getTasks()', () => {
    describe('when no topics have been registered', () => {
      beforeEach(() => {
        expect(provider.getTopicRegistrationsCount()).toEqual(0);
      });
      it('returns an empty array, rather than waiting indefinitely', () => {
        expect(provider.getTasks().pipe(first()).subscribe(response => {
          expect(response.tasks.length).toBe(0);
        }));
      });
    });
  });

  it('stores its id as a static property on the class', () => {
    expect(CyberUiMindfullyAttendToTopicTaskProvider.id).toEqual(CYBER_UI_MINDFULLY_ATTEND_TO_TOPIC_TASK_PROVIDER_ID);
  });

  describe('when the user selects the primary action', () => {
    let task: Task;
    let responseEvent: CyberUiMindfullyAttendToTopicUserResponseEvent;

    beforeEach(async(() => {
      provider.registerTopics({
        topics: EXAMPLE_TOPICS_LIST
      });
      provider.getTasks().subscribe(tasksResponse => {
        task = tasksResponse.tasks[0];
      });
      provider.responses.subscribe(response => {
        responseEvent = response;
      })
    }));
    beforeEach(async(() => {
      task.actions[0].handler({});
    }));

    it('emits a response event for that action', () => {
      expect(responseEvent).not.toBeUndefined();
      expect(responseEvent.actionLabel).not.toBeUndefined();
      expect(responseEvent.actionLabel).toEqual(task.actions[0].label);
    });
  });

});
// TODO Add a test that the topic's `labelWhenUsedInASentence` is used in the produced task statement
// TODO Test that when subscribing to getTopicRegistrations(), altering the returned arrays does not alter the contents of the provider's registrations array (e.g. test that consumers receieve a shallow copy rather than a reference to the original array)