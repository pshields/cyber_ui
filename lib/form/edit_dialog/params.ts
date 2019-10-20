import {Observable} from 'rxjs';

import {Action} from '../../task/interfaces/action';

import {FormField} from '../form_field';
import {CyberUiFormModel} from '../defs/form_model';


// MODEL_T must extend CyberUiFormModel because cyber-ui-form-fields requires something that
// at minimum conforms to CyberUiFormModel
export interface CyberUiEditDialogParams<MODEL_T extends CyberUiFormModel = CyberUiFormModel> {
  // the (lower-case) label of the kind of thing being edited
  // this is used in the dialog title
  // e.g. if editing a task, contentTypeLabel should be 'task',
  // and the resulting dialog title will be 'Edit task'
  contentTypeLabel?: string;
  // the data model object to bind to the form fields to
  model: MODEL_T;
  // the fields to show in the dialog
  // the edit dialog component will subscribe and unsubscribe from this observable as appropriate
  fields: Observable<FormField<MODEL_T>[]>;
  // the actions to show in the mat-dialog-actions section
  actions?: Action[];
  // optional function to call when the user saves the form component and closes the dialog
  // without triggering any of the dialog actions
  saveFn?: () => Promise<void>;
}
