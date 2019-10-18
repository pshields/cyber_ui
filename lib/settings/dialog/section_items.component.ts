import {Component, Input, Output, EventEmitter} from '@angular/core';

import {SettingsSectionConfigItem} from '../interfaces/section_config';


@Component({
  selector: 'cyber-ui-settings-section-items',
  templateUrl: './section_items.component.html',
})
export class CyberUiSettingsSectionItemsComponent<SETTINGS_T = {}> {
  @Input() label?: string;
  @Input() items?: SettingsSectionConfigItem[];
  @Input() model: SETTINGS_T;
  @Output() changes = new EventEmitter<void>();

  onChange() {
    this.changes.emit();
  }
}
