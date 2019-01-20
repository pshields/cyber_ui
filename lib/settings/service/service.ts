import {Injectable} from '@angular/core';

import {Observable, ReplaySubject} from 'rxjs';
import {map} from 'rxjs/operators';


@Injectable({providedIn: 'root'})
export class CyberUiSettingsService<SETTINGS_T = {}> {
  // A replay subject containing the current settings object
  settings = new ReplaySubject<SETTINGS_T>(1);

  onChange(settings: SETTINGS_T) {
    this.settings.next(settings);
  }

  // Returns a stream of settings optionally narrowed down by any provided property names
  // For example, listen('foo', 'bar') would provide a stream of settings.foo.bar values
  listen(...propertyNames: string[]): Observable<any> {
    return this.settings.pipe(map(settings => {
      for (let propertyName of propertyNames) {
        settings = settings[propertyName];
      }
      return settings;
    }));
  }
}
