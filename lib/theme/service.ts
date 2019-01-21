import {Injectable, Renderer2} from '@angular/core';

import {Observable, ReplaySubject} from 'rxjs';

import {CyberUiSettingsService} from 'lib/settings/service/service';


@Injectable({providedIn: 'root'})
export class CyberUiThemeService {
  readonly currentThemeIds = new ReplaySubject<string>(1);
  // An up-to-date reference to the current theme's id
  public currentThemeId: string;

  constructor(
      readonly settingsService: CyberUiSettingsService,
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

  // Utility method to pin the active theme class to the body element
  pinActiveThemeClassOnBodyElement(document: Document, renderer: Renderer2) {
    let previousThemeId = undefined;
    this.currentThemeIds.subscribe(themeId => {
      // If the theme has changed, update the class on the body element
      if (themeId !== previousThemeId) {
        // Remove the old theme class
        if (previousThemeId) {
          renderer.removeClass(document.body, `cyber-ui-${previousThemeId}-theme`);
        }
        // Add the new theme class
        renderer.addClass(document.body, `cyber-ui-${themeId}-theme`);
        // Update the reference to the previous theme ID
        previousThemeId = themeId;
      }
    });
  }
}
