import {TopicRegistrationOptions} from './defs/topic_registration_options';


export class TopicRegistration {
  label: string;
  labelWhenUsedInASentence: string;
  importance: number;

  constructor(options: TopicRegistrationOptions) {
    this.label = options.label;
    this.labelWhenUsedInASentence = this.getLabelWhenUsedInASentence(options);
    this.importance = this.getImportance(options);
  }

  getLabelWhenUsedInASentence(options: TopicRegistrationOptions) {
    return options.labelWhenUsedInASentence || this.label.toLocaleLowerCase();
  }

  getImportance(options: TopicRegistrationOptions) {
    const importance = options.importance;
    if (importance === undefined) console.error('Required property `importance` was undefined');
    if (importance < 0 || importance > 1) console.error('Required property `importance` was not in the domain [0, 1], which is required');
    return importance;
  }
}
