import {TopicRegistrationOptions} from './defs/topic_registration_options';


export class TopicRegistration {
  label: string;
  labelWhenUsedInASentence: string;

  constructor(options: TopicRegistrationOptions) {
    this.label = options.label;
    this.labelWhenUsedInASentence = this.getLabelWhenUsedInASentence(options);
  }

  getLabelWhenUsedInASentence(options: TopicRegistrationOptions) {
    return options.labelWhenUsedInASentence || this.label.toLocaleLowerCase();
  }
}
