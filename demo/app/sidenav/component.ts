import {Component, HostBinding} from '@angular/core';

import {CyberUiThemeService} from 'lib/public_api';

import {CYBER_UI_CAPABILITY_AREAS} from '../../defs/capability_areas';
import {GUIDES} from '../../guides/component';
import {INTERFACES} from '../../interfaces/component';


@Component({
  selector: 'app-sidenav',
  templateUrl: 'component.html',
  styleUrls: ['component.scss'],
})
export class AppSidenavComponent {
  // Expose for use in the template
  readonly CAPABILITY_AREAS = CYBER_UI_CAPABILITY_AREAS;
  readonly GUIDES = GUIDES;
  readonly INTERFACES = INTERFACES;

  @HostBinding('style.color') color: string;
  matListSubheaderColor: string;

  constructor(
    readonly themeService: CyberUiThemeService,
  ) {
    themeService.textColor.subscribe(color => {
      this.color = color;
    });
    themeService.matListSubheaderColor.subscribe(color => {
      this.matListSubheaderColor = color;
    });
  }
}
