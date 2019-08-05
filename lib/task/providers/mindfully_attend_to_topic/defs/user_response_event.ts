import {TopicRegistration} from '../topic_registration';


// Representation of a user selecting a response for a task provided by this provider
// TODO Generalize this across multiple providers
export interface CyberUiMindfullyAttendToTopicUserResponseEvent {
  // The task label for the task being responded to
  taskLabel: string;
  // The action label selected by the user
  actionLabel: string;
  // The topic registration of the topic corresponding to this task
  topicRegistration: TopicRegistration;
}
