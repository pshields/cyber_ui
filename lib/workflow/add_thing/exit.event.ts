import {CyberUiSavableModel} from '../../backends/interfaces/savable_model';


export interface CyberUiAddThingWorkflowExitEvent<MODEL_T extends CyberUiSavableModel = CyberUiSavableModel> {
  // A reference to the saved model, if applicable
  model?: MODEL_T;
}
