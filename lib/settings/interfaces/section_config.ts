import {FormField} from 'lib/form/form_field';


export type SettingsSectionConfigItem = SettingsSectionConfig | FormField;


export interface SettingsSectionConfig{
  // Label for this settings section
  label?: string;
  // List of items corresponding to this section
  // Each item can be either a field or a subsection
  items?: SettingsSectionConfigItem[];
};
