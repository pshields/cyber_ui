import {Component, Input} from '@angular/core';

import {SettingsSection} from '../interfaces/section';


@Component({
  selector: 'cyber-ui-settings-section-items',
  templateUrl: './section_items.component.html',
})
export class CyberUiSettingsSectionItemsComponent {
  @Input() label?: string;
  @Input() items?: SettingsSection<{}>[];
}
