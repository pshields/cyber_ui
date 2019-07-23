import {TopicRegistrationOptions} from './defs/topic_registration_options';


export class TopicRegistration {
  label: string;

  constructor(options: TopicRegistrationOptions) {
    this.label = options.label;
  }
}
