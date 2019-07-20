import {Component, HostBinding} from '@angular/core';
import {ActivatedRoute} from '@angular/router';

import {CyberUiThemeService} from 'lib/public_api';

import {CyberUiCapabilityArea, CYBER_UI_CAPABILITY_AREAS} from '../defs/capability_areas';


@Component({
  selector: 'capability-areas',
  templateUrl: './component.html',
  styleUrls: ['./component.scss'],
})
export class CapabilityAreasComponent {
  // The ID of the capability area (taken from the route)
  capabilityAreaId: string;
  // The current capability area
  capabilityArea: CyberUiCapabilityArea;
  // The color of the primary text content on page
  // (dynamic based on theme settings)
  @HostBinding('style.color') color: string;

  constructor(
    route: ActivatedRoute,
    themeService: CyberUiThemeService
  ) {
    route.params.subscribe(params => {
      this.capabilityAreaId = params.id;
      this.capabilityArea = CYBER_UI_CAPABILITY_AREAS.find(obj => obj.id === this.capabilityAreaId);
    });
    // Update the text color based on the current theme settings
    themeService.textColor.subscribe(color => {
      this.color = color;
    });
  }
}
