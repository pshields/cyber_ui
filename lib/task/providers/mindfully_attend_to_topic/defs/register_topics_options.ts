import {TopicRegistrationOptions} from './topic_registration_options';


export interface RegisterTopicsOptions<TOPIC_DATA_T> {
  // The list of topics to register
  topics: TopicRegistrationOptions<TOPIC_DATA_T>[];
  // Whether to clear the existing registrations (default if unspecified: false)
  clearExisting?: boolean;
}
