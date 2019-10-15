import {Component} from '@angular/core';

import {Observable} from 'rxjs';

import {CyberUiDemoThingService} from '../../../thing/service';
import {CyberUiDemoThingModel} from '../../../thing/model';


@Component({
  selector: 'cui-demo-view-concepts',
  templateUrl: 'component.html',
})
export class CyberUiDemoViewConceptsComponent {

  concepts: Observable<CyberUiDemoThingModel[]>;

  constructor(
    readonly thingService: CyberUiDemoThingService,
  ) {
    this.concepts = thingService.getThingsHavingCharacterization('concept');
  }

}
