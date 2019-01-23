import {BooleanField} from 'lib/public_api';
import {ChoiceField} from 'lib/public_api';
import {TextField} from 'lib/public_api';
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
            label: 'Theme options',
            items: [
              new TextField({
                label: 'Top toolbar default background color',
                propertyName: 'topToolbarDefaultBackgroundColor',
              }),
              new BooleanField({
                label: 'Match app and toolbar background?',
                propertyName: 'matchAppAndToolbarBackground',
                helpText: 'If true, the app background will be configured to match that of the top toolbar, removing the visual boundary between them.',
              })
            ]
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
