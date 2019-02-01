import {BooleanField} from '../../form/fields/boolean';
import {TextField} from '../../form/fields/text';


export const MATCH_APP_AND_TOOLBAR_BACKGROUND = new BooleanField({
  label: 'Match app and toolbar background?',
  propertyName: 'matchAppAndToolbarBackground',
  helpText: 'If true, the app background will be configured to match that of the top toolbar, removing the visual boundary between them.',
});


export const TOP_TOOLBAR_DEFAULT_BACKGROUND_COLOR = new TextField({
  label: 'Top toolbar default background color',
  propertyName: 'topToolbarDefaultBackgroundColor',
});


export const CYBER_UI_MATERIAL_THEME_SETTINGS = [
  TOP_TOOLBAR_DEFAULT_BACKGROUND_COLOR,
  MATCH_APP_AND_TOOLBAR_BACKGROUND,
];
