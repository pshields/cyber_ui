import {RegisterTopicsOptions} from './defs/register_topics_options';
import {RegisterTopicsResponse} from './defs/register_topics_response';


// A human readable label describing this provider
export const CYBER_UI_MINDFULLY_ATTEND_TO_TOPIC_TASK_PROVIDER_LABEL = 'Mindful attention to topics';

// A string identifier of this provider for use in e.g. settings lists
export const CYBER_UI_MINDFULLY_ATTEND_TO_TOPIC_TASK_PROVIDER_ID = 'CYBER_UI_MINDFULLY_ATTEND_TO_TOPIC_TASK_PROVIDER';


// Provides tasks around mindfully attending to topics
// Example task statement:
// Start a 50-minute hard focus session with the intention to mindfully attend to systemization, and log follow-ups as appropriate
export class CyberUiMindfullyAttendToTopicTaskProvider {

  // Registers topics with the provider
  registerTopics(options: RegisterTopicsOptions): RegisterTopicsResponse {
    return;
  }

}
