import {InjectionToken} from '@angular/core';

import {CyberUiSavableModel} from './model';


export const CYBER_UI_MODEL_SERVICE = new InjectionToken('CyberUiModelService');


export interface CyberUiModelService {
  // Gets a new, empty model object for use in the app
  // For example, workflows where the user inputs a new thing
  // (goal, project, task, etc.) would likely use this method
  getNewEmptyModel(): CyberUiSavableModel;
}