import {Injectable} from '@angular/core';

import {Observable, ReplaySubject} from 'rxjs';
import {map} from 'rxjs/operators';


@Injectable({providedIn: 'root'})
export class CyberUiSettingsService<SETTINGS_T = {}> {
  // A replay subject containing the current settings object
  private settings = new ReplaySubject<SETTINGS_T>(1);

  // Consumers can call this method to update the global settings object
  onChange(settings: SETTINGS_T) {
    this.settings.next(settings);
  }

  // Returns a stream of settings optionally narrowed down by any provided property names
  // For example, listen('foo', 'bar') would provide a stream of settings.foo.bar values
  // TODO Fix the any type here
  listen(...propertyNames: string[]): Observable<any> {
    return this.settings.pipe(map(settings => {
      for (let propertyName of propertyNames) {
        settings = settings[propertyName];
      }
      return settings;
    }));
  }
}
