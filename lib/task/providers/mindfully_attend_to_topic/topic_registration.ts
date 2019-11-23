import slugify from 'slugify';

import {TopicRegistrationOptions} from './defs/topic_registration_options';


// The default timebox duration, in minutes
export const CYBER_UI_MINDFULLY_ATTEND_TO_TOPIC_DEFAULT_TIMEBOX_DURATION = 50;


export class CyberUiTopicRegistration<DATA_T> {
  readonly label: string;
  readonly slug: string;
  readonly labelWhenUsedInASentence: string;
  readonly importance: number;
  readonly timeboxDuration: number;
  readonly data?: DATA_T;

  constructor(options: TopicRegistrationOptions<DATA_T>) {
    this.label = options.label;
    this.slug = this.getSlug(options);
    this.labelWhenUsedInASentence = this.getLabelWhenUsedInASentence(options);
    this.importance = this.getImportance(options);
    this.timeboxDuration = this.getTimeboxDuration(options);
    this.data = options.data;
  }

  getLabelWhenUsedInASentence(options: TopicRegistrationOptions<DATA_T>) {
    return options.labelWhenUsedInASentence || this.label.toLocaleLowerCase();
  }

  getImportance(options: TopicRegistrationOptions<DATA_T>) {
    const importance = options.importance;
    if (importance === undefined) console.error('Required property `importance` was undefined');
    if (importance < 0 || importance > 1) console.error('Required property `importance` was not in the domain [0, 1], which is required');
    return importance;
  }

  getSlug(options: TopicRegistrationOptions<DATA_T>) {
    return options.slug || slugify(options.label, {lower: true});
  }

  getTimeboxDuration(options: TopicRegistrationOptions<DATA_T>) {
    return options.timeboxDuration || CYBER_UI_MINDFULLY_ATTEND_TO_TOPIC_DEFAULT_TIMEBOX_DURATION;
  }
}
