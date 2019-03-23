import {Component} from '@angular/core';
import {ActivatedRoute} from '@angular/router';

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

  constructor(route: ActivatedRoute) {
    route.params.subscribe(params => {
      this.capabilityAreaId = params.id;
      this.capabilityArea = CYBER_UI_CAPABILITY_AREAS.find(obj => obj.id === this.capabilityAreaId);
    });
  }
}
