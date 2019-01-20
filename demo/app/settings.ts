import {ChoiceField} from 'lib/public_api';
import {SettingsSectionConfigItem} from 'lib/public_api';


export class DemoSettingsConfig {
  readonly label = 'Demo settings';
  items: SettingsSectionConfigItem[];

  constructor() {
    this.items = [
      {
        label: 'Theming',
        items: [
          this.getThemePickerField(),
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
}