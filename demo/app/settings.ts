import {BooleanField} from 'lib/public_api';
import {ChoiceField} from 'lib/public_api';
import {CYBER_UI_MATERIAL_THEME_SETTINGS} from 'lib/public_api';
import {ENERGY_LEVEL_FIELD} from 'lib/public_api';
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
          },
          {
            label: 'User settings',
            items: [
              ENERGY_LEVEL_FIELD,
            ]
          },
          new ChoiceField({
            label: 'Pomodoro length',
            propertyName: 'pomodoroLength',
            options: [
              new Option('20 minutes', '20'),
              new Option('25 minutes', '25')
            ]
          }),
          new BooleanField({
            label: 'Play sound effect when recognizing an achievement',
            propertyName: 'playSoundEffectWhenRecognizingAnAchievement',
          }),
          new ChoiceField({
            label: 'Achievement sound effect',
            propertyName: 'achievementSoundEffectName',
            options: [
              new Option('Applause', 'applause')
            ]
          }),
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
  matchAppAndToolbarBackground = true;
  pomodoroLength = '20';  // in minutes
  playSoundEffectWhenRecognizingAnAchievement = true;
  achievementSoundEffectName = 'applause';
}
