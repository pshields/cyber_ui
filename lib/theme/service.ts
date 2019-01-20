import {Injectable} from '@angular/core';

import {Observable, ReplaySubject} from 'rxjs';

import {CyberUiSettingsService} from 'lib/settings/service/service';


@Injectable({providedIn: 'root'})
export class CyberUiThemeService {
  private currentThemeIds = new ReplaySubject<string>(1);
  // An up-to-date reference to the current theme's id
  public currentThemeId: string;

  constructor(
      readonly settingsService: CyberUiSettingsService
  ) {
    // Keep currentThemeId up to date
    this.currentThemeIds.subscribe(id => this.currentThemeId = id);
    // Subscribe to settings updates
    settingsService.listen('theme').subscribe(themeId => {
      this.currentThemeIds.next(themeId);
    });
  }

  // Returns an observable which emits the current theme's id
  getThemeId(): Observable<string> {
    return this.currentThemeIds;
  }

}
