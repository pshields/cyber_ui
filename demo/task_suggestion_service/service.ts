import {Injectable} from '@angular/core';

import {CYBER_UI_MINDFULLY_ATTEND_TO_TOPIC_TASK_PROVIDER_ID} from 'lib/public_api';
import {CyberUiMindfullyAttendToTopicTaskProvider} from 'lib/public_api';
import {Task} from 'lib/public_api';
import {TaskProviderRegistryService} from 'lib/public_api';
import {TaskSuggestionService} from 'lib/public_api';
import {TaskSuggestionServiceGetSuggestionsBaseOptions} from 'lib/public_api';
import {TaskSuggestionServiceGetSuggestionsBaseResponse} from 'lib/public_api';

import {DEMO_TASK_PROVIDER_ID, DemoTaskProvider} from './demo_task_provider';


// A TaskSuggestionService for use on the demo site
@Injectable()
export class DemoTaskSuggestionService implements TaskSuggestionService<
    Task,
    TaskSuggestionServiceGetSuggestionsBaseOptions,
    TaskSuggestionServiceGetSuggestionsBaseResponse<Task>
  > {

  constructor(
    readonly demoTaskProvider: DemoTaskProvider,
    readonly mindfullyAttendToTopicProvider: CyberUiMindfullyAttendToTopicTaskProvider,
    readonly taskProviderRegistry: TaskProviderRegistryService,
  ) {
    taskProviderRegistry.registerProvider(DEMO_TASK_PROVIDER_ID, demoTaskProvider);
    taskProviderRegistry.registerProvider(CYBER_UI_MINDFULLY_ATTEND_TO_TOPIC_TASK_PROVIDER_ID, mindfullyAttendToTopicProvider);
    // Register some example topics with the mindfully-attend-to-topic task provider
    mindfullyAttendToTopicProvider.registerTopics({
      topics: [
        {
          label: 'Systemization'
        }, {
          label: 'Lifestyle'
        }
      ]
    });
  }

  getSuggestions(options: TaskSuggestionServiceGetSuggestionsBaseOptions) {
    return this.taskProviderRegistry.getTasks(options);
  }
}
