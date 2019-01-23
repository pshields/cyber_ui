import {ChoiceField} from 'lib/public_api';
import {CYBER_UI_MATERIAL_THEME_SETTINGS} from 'lib/public_api';
import {SettingsSectionConfigItem} from 'lib/public_api';

import * as colors from '../defs/colors';


export class DemoSettingsConfig {
  readonly label = 'Demo settings';
  items: SettingsSectionConfigItem[];

  constructor() {
    this.items = [
      {
        items: [
          this.getThemePickerField(),
          {
            label: 'Material theme settings',
            items: CYBER_UI_MATERIAL_THEME_SETTINGS,
          }
        ],
      }
    ];
  };


  getThemePickerField() {
    return new ChoiceField({
      label: 'Theme',
      propertyName: 'theme',
      options: [
        new Option('Material', 'material'),
        new Option('Minimal', 'minimal'),
      ]
    });
  }
}

// Used to initialize the settings
export class DemoSettings {
  theme = 'material';
  topToolbarDefaultBackgroundColor = colors.DEMO_APP_PRIMARY;
  matchAppAndToolbarBackground = false;
}
