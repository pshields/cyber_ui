import {Injectable, Renderer2} from '@angular/core';

import {ReplaySubject} from 'rxjs';

import {CyberUiSettingsService} from 'lib/settings/service/service';


@Injectable({providedIn: 'root'})
export class CyberUiThemeService {
  readonly currentThemeIds = new ReplaySubject<string>(1);
  // The current theme's id
  public currentThemeId: string;
  // The current top toolbar background CSS value to use
  public topToolbarBackgroundColor: string;
  // The current app background CSS value to use
  public appBackground: string;

  constructor(
      readonly settingsService: CyberUiSettingsService,
  ) {
    // Keep currentThemeId up to date
    this.currentThemeIds.subscribe(id => this.currentThemeId = id);
    // Subscribe to settings updates
    settingsService.listen('theme').subscribe(themeId => {
      if (themeId !== this.currentThemeId) {
        this.currentThemeIds.next(themeId);
      }
    });
    // Keep cached properties up to date on settings changes
    settingsService.listen().subscribe(settings => this.recalculateCachedProperties(settings));

  }

  recalculateCachedProperties(settings) {
    this.topToolbarBackgroundColor = this.getTopToolbarBackgroundColor(settings);
    this.appBackground = this.getAppBackground(settings);
  }

  getTopToolbarBackgroundColor(settings) {
    return settings.topToolbarDefaultBackgroundColor;
  }

  getAppBackground(settings) {
    if (settings.matchAppAndToolbarBackground) {
      return this.topToolbarBackgroundColor;
    } else {
      // TODO This should be configurable
      return 'white';
    }
  }

  // Utility method to pin the active theme class to the body element
  pinActiveThemeClassOnBodyElement(document: Document, renderer: Renderer2) {
    let previousThemeId = undefined;
    this.currentThemeIds.subscribe(themeId => {
      // Remove the old theme class
      if (previousThemeId) {
        renderer.removeClass(document.body, `cyber-ui-${previousThemeId}-theme`);
      }
      // Add the new theme class
      renderer.addClass(document.body, `cyber-ui-${themeId}-theme`);
      // Update the reference to the previous theme ID
      previousThemeId = themeId;
    });
  }
}
