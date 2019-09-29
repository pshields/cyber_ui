import {TopicRegistrationOptions} from './topic_registration_options';


export interface RegisterTopicsOptions {
  // The list of topics to register
  topics: TopicRegistrationOptions[];
  // Whether to clear the existing registrations (default if unspecified: false)
  clearExisting?: boolean;
}
