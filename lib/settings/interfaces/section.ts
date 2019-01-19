export type SettingsSectionItem<SETTINGS_T = {}> = SettingsSection<SETTINGS_T> | SETTINGS_T;

export interface SettingsSection<SETTINGS_T = {}> {
  // Label for this section
  label?: string;
  // List of items corresponding to this section
  // Each item can be either a settings object or a subsection
  items?: SettingsSectionItem<SETTINGS_T>[];
};
