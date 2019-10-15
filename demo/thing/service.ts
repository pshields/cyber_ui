import {Injectable} from '@angular/core';

import {Observable, of} from 'rxjs';

import {CYBER_UI_DEMO_THINGS} from '../data/things';

import {CyberUiDemoThingSchema} from './schema';
import {CyberUiDemoThingModel} from './model';


@Injectable({providedIn: 'root'})
export class CyberUiDemoThingService {

  readonly things = CYBER_UI_DEMO_THINGS
    .map((thingSchema: CyberUiDemoThingSchema) => new CyberUiDemoThingModel(thingSchema));

  getThingsHavingCharacterization(characterization: string): Observable<CyberUiDemoThingModel[]> {
    return of(
      this.things
          .filter(thing => thing.characterizations.includes(characterization))
    );
  }
}
