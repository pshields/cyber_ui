import {TextField} from '../text';


// This field is a user-editable, Markdown-formatted text field that the user can use to track the completion criteria for a thing
// A typical example of the contents of this field would be a bulleted list of human-readable criteria
// Rationale for inclusion as a common field: task-like things commonly have some notion of completion criteria
// The property name is suffixed with 'Text' in case a more technical representation of the criteria are to be stored at 'completionCriteria'
export const COMPLETION_CRITERIA_TEXT_FIELD = new TextField({
  label: 'Completion criteria',
  propertyName: 'completionCriteriaText',
});


