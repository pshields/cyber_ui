import {ChoiceField} from 'lib/public_api';
import {SettingsSectionItem} from 'lib/public_api';


export class DemoSettings {
  readonly label = 'Demo settings';
  items: SettingsSectionItem[];

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
    const field = new ChoiceField({
      label: 'Theme',
      propertyName: 'value',
      options: [
        new Option('Material', 'material'),
        new Option('Minimal', 'minimal'),
      ]
    });
    // At present the settings values are stored directly on the fields
    // at the 'value' property. This line initializes this setting to the
    // Material theme
    // TODO Do this in a less hacky way - potentially by allowing specification
    // of a default or initial value in the field options
    (field as any).value = 'material';
    return field;
  }
}
