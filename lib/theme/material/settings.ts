import {BooleanField} from '../../form/field/boolean/field';
import {TextField} from '../../form/field/text/field';


export const MATCH_APP_AND_TOOLBAR_BACKGROUND = new BooleanField({
  label: 'Match app and toolbar background?',
  propertyName: 'matchAppAndToolbarBackground',
  helpText: 'If true, the app background will be configured to match that of the top toolbar, removing the visual boundary between them.',
});


export const TOP_TOOLBAR_DEFAULT_BACKGROUND_COLOR = new TextField({
  label: 'Top toolbar default background color',
  propertyName: 'topToolbarDefaultBackgroundColor',
});


export const TOP_TOOLBAR_GRADIENT = new BooleanField({
  label: 'Top toolbar gradient?',
  propertyName: 'topToolbarGradientActive',
});


export const TOP_TOOLBAR_DROP_SHADOW = new BooleanField({
  label: 'Top toolbar drop shadow?',
  propertyName: 'topToolbarDropShadowActive',
});


export const CYBER_UI_MATERIAL_THEME_SETTINGS = [
  TOP_TOOLBAR_DEFAULT_BACKGROUND_COLOR,
  MATCH_APP_AND_TOOLBAR_BACKGROUND,
  TOP_TOOLBAR_GRADIENT,
  TOP_TOOLBAR_DROP_SHADOW,
];
