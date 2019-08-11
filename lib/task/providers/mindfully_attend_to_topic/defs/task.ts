import {Task} from '../../../interfaces/task';

import {CyberUiTopicRegistration} from '../topic_registration';


// Tasks from this provider also include a reference to the topic registration
// This can be used e.g. to indicate engagement with the corresponding topic later on
export interface CyberUiMindfullyAttendToTopicTask extends Task {
  topic: CyberUiTopicRegistration;
}
