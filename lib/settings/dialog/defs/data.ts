import {SettingsSectionConfig} from '../../interfaces/section_config';


export interface CyberUiSettingsDialogData<SETTINGS_T> {
  config: SettingsSectionConfig;
  model: SETTINGS_T;
}
