import {CyberUiTopicRegistration} from '../topic_registration';


// Representation of a user selecting a response for a task provided by this provider
// TODO Generalize this across multiple providers
// DATA_T is the type of the user-defined data payload optionally present on topic registrations
export interface CyberUiMindfullyAttendToTopicUserResponseEvent<DATA_T = {}> {
  // The task label for the task being responded to
  taskLabel: string;
  // The action label selected by the user
  actionLabel: string;
  // The canonical identifier / slug for the action
  canonicalActionSlug: 'proceed' | 'skip';
  // The topic registration of the topic corresponding to this task
  topicRegistration: CyberUiTopicRegistration<DATA_T>;
}
