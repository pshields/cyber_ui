import {Injectable} from '@angular/core';

import {Observable, ReplaySubject} from 'rxjs';
import {map} from 'rxjs/operators';


@Injectable({providedIn: 'root'})
export class CyberUiSettingsService<ROOT_SETTINGS_T = {}> {
  // A replay subject containing the current settings object
  private settings = new ReplaySubject<ROOT_SETTINGS_T>(1);

  // Consumers can call this method to update the global settings object
  onChange(settings: ROOT_SETTINGS_T) {
    this.settings.next(settings);
  }

  // Returns a stream of settings optionally narrowed down by any provided property names
  // For example, listen('foo', 'bar') would provide a stream of settings.foo.bar values
  // If the listened-to setting's value is immutable, consider using the 'distinctUntilChanged'
  // rxjs operator to filter out noop changes from the returned observable
  listen<LISTENED_SETTING_VALUE_T = unknown>(...propertyNames: string[]): Observable<LISTENED_SETTING_VALUE_T> {
    return this
      .settings
      .pipe(
        map(settings => {
          for (let propertyName of propertyNames) {
            settings = settings[propertyName];
          }
          return settings as unknown as LISTENED_SETTING_VALUE_T;
        }),
      );
  }
}
