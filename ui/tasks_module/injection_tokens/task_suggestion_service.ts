import {InjectionToken} from '@angular/core';

import {TaskSuggestionEngine} from '../interfaces/task_suggestion_engine';


export const TASK_SUGGESTION_SERVICE = new InjectionToken<TaskSuggestionEngine>('Task SuggestionService');
