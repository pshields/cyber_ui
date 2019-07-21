import {Injectable, Renderer2} from '@angular/core';

import {ReplaySubject} from 'rxjs';

import * as tinycolor_ from 'tinycolor2';

import {CyberUiSettingsService} from '../settings/service/service';


// Avoid "Cannot call a namespace ('tinycolor')" compilation error
// see e.g. https://github.com/jvandemo/generator-angular2-library/issues/221
const tinycolor = tinycolor_;


@Injectable({providedIn: 'root'})
export class CyberUiThemeService {
  readonly currentThemeIds = new ReplaySubject<string>(1);
  // The current theme's id
  public currentThemeId: string;
  // The current top toolbar background CSS value to use
  public topToolbarBackgroundColor: string;
  // The current app background CSS value to use
  public appBackground: string;
  // The current text color to use for subheaders in Material lists
  readonly matListSubheaderColor = new ReplaySubject<string>(1);
  // The current text color to use in typical body text on the page
  // As currently implemented, opacity is diminished to reduce contrast
  // In situations where a solid, prominent foreground text color is desired,
  // use prominentTextColor instead
  readonly textColor = new ReplaySubject<string>(1);
  // A more prominent foreground text color appropriate given the current background
  // The current implementation preserves full opacity
  readonly prominentTextColor = new ReplaySubject<string>(1);
  // The primary color to use for links
  readonly primaryLinkColor = new ReplaySubject<string>(1);

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
    // Update theme-related CSS custom properties
    this.primaryLinkColor.subscribe(color => this.setCssCustomProperty('--primary-link-color', color));
  }

  recalculateCachedProperties(settings) {
    this.topToolbarBackgroundColor = this.getTopToolbarBackgroundColor(settings);
    this.appBackground = this.getAppBackground(settings);
    this.matListSubheaderColor.next(this.getMatListSubheaderColor(settings));
    this.textColor.next(this.getTextColor(settings));
    this.prominentTextColor.next(this.getProminentTextColor(settings));
    this.primaryLinkColor.next(this.getPrimaryLinkColor(settings));
  }

  getMatListSubheaderColor(settings) {
    // TODO There's some more work to do here, but as a starting point:
    // if the background color is dark, use white; if it's bright, use black.
    const color = tinycolor(this.getAppBackground(settings));
    if (color.getBrightness() < 127) {
      return 'rgba(255, 255, 255, 0.54)';
    } else {
      return 'rgba(0, 0, 0, 0.54)';
    }
  }

  getPrimaryLinkColor(settings) {
    const appBackgroundColor = tinycolor(this.getAppBackground(settings));
    const topToolbarBackgroundColor = tinycolor(this.getTopToolbarBackgroundColor(settings));
    if (appBackgroundColor.isLight() && topToolbarBackgroundColor.isDark()) {
      return topToolbarBackgroundColor.darken(10);
    } else if (appBackgroundColor.isLight() && topToolbarBackgroundColor.isLight()) {
      return 'blue';
    } else {
      // The app background color is dark
      return appBackgroundColor.lighten(25).spin(10);
    }
  }

  getProminentTextColor(settings) {
    // TODO There's some more work to do here, but as a starting point:
    // if the background color is dark, use white; if it's bright, use black.
    const color = tinycolor(this.getAppBackground(settings));
    if (color.getBrightness() < 127) {
      return 'white';
    } else {
      return 'black';
    }
  }

  getTextColor(settings) {
    // TODO There's some more work to do here, but as a starting point:
    // if the background color is dark, use white; if it's bright, use black.
    const color = tinycolor(this.getAppBackground(settings));
    if (color.getBrightness() < 127) {
      return 'rgba(255, 255, 255, 0.87)';
    } else {
      return 'rgba(0, 0, 0, 0.87)';
    }
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

  setCssCustomProperty(propertyName: string, value: string) {
    document.documentElement.style.setProperty(propertyName, value);
  }
}
