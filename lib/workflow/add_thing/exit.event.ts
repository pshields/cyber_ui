import {CyberUiSavableModel} from '../../backends/interfaces/savable_model';


export interface CyberUiAddThingWorkflowExitEvent {
  // A reference to the saved model, if applicable
  model?: CyberUiSavableModel;
}
