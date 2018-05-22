import {TextField} from '../text';


export const RATIONALE_FIELD = new TextField({
  label: 'Rationale',
  propertyName: 'rationale',
  helpText: 'The rationale for doing this thing or for why this thing is important'
});

// TODO Test that this field has a default propertyName of 'rationale'
// TODO Test that this field is Markdown-formatted
// TODO Test that this field has appropriate help text
