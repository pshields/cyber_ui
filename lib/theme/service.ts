import {Injectable, Renderer2} from '@angular/core';

import {ReplaySubject} from 'rxjs';

import * as tinycolor_ from 'tinycolor2';

import {CyberUiSettingsService} from '../settings/service/service';


// Avoid "Cannot call a namespace ('tinycolor')" compilation error
// see e.g. https://github.com/jvandemo/generator-angular2-library/issues/221
const tinycolor = tinycolor_;

// Static theme constants
export const DARK_THEME_TEXT_COLOR = 'rgba(255, 255, 255, 0.87)';
export const LIGHT_THEME_TEXT_COLOR = 'rgba(0, 0, 0, 0.87)';
export const DARK_THEME_SUBHEADER_COLOR = 'rgba(255, 255, 255, 0.54)';
export const LIGHT_THEME_SUBHEADER_COLOR = 'rgba(0, 0, 0, 0.54)';
export const DARK_THEME_LOW_OPACITY_COLOR = 'rgba(255, 255, 255, 0.42)';
export const LIGHT_THEME_LOW_OPACITY_COLOR = 'rgba(0, 0, 0, 0.42)';

@Injectable({providedIn: 'root'})
export class CyberUiThemeService {
  readonly currentThemeIds = new ReplaySubject<string>(1);
  // The current theme's id
  public currentThemeId: string;
  // The current top toolbar background CSS value to use
  public topToolbarBackgroundColor: string;
  // The current app background CSS value to use
  public appBackground: string;
  readonly appBackgroundColor = new ReplaySubject<string>(1);
  // The current text color to use for subheaders in Material lists
  readonly matListSubheaderColor = new ReplaySubject<string>(1);
  readonly lowOpacityColor = new ReplaySubject<string>(1);
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
    settingsService.listen('theme').subscribe((themeId: string) => {
      if (themeId !== this.currentThemeId) {
        this.currentThemeIds.next(themeId);
      }
    });
    // Keep cached properties up to date on settings changes
    settingsService.listen().subscribe(settings => this.recalculateCachedProperties(settings));
    // Update theme-related CSS custom properties
    this.appBackgroundColor.subscribe(color => this.setCssCustomProperty('--app-background-color', color));
    this.textColor.subscribe(color => this.setCssCustomProperty('--text-color', color));
    this.lowOpacityColor.subscribe(color => this.setCssCustomProperty('--low-opacity-color', color));
    this.matListSubheaderColor.subscribe(color => this.setCssCustomProperty('--mat-list-subheader-color', color));
    this.primaryLinkColor.subscribe(color => this.setCssCustomProperty('--primary-link-color', color));
    this.prominentTextColor.subscribe(color => this.setCssCustomProperty('--prominent-text-color', color));
    // Set static CSS custom properties
    this.setCssCustomProperty('--light-background-text-color', LIGHT_THEME_TEXT_COLOR);
    this.setCssCustomProperty('--light-background-subheader-color', LIGHT_THEME_SUBHEADER_COLOR);
    this.setCssCustomProperty('--light-background-low-opacity-color', LIGHT_THEME_LOW_OPACITY_COLOR);
  }

  recalculateCachedProperties(settings) {
    this.topToolbarBackgroundColor = this.getTopToolbarBackgroundColor(settings);
    this.appBackground = this.getAppBackground(settings);
    this.appBackgroundColor.next(this.getAppBackground(settings));
    this.lowOpacityColor.next(this.getLowOpacityColor(settings));
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
      return DARK_THEME_SUBHEADER_COLOR;
    } else {
      return LIGHT_THEME_SUBHEADER_COLOR;
    }
  }

  getLowOpacityColor(settings) {
    // TODO There's some more work to do here, but as a starting point:
    // if the background color is dark, use white; if it's bright, use black.
    const color = tinycolor(this.getAppBackground(settings));
    if (color.getBrightness() < 127) {
      return DARK_THEME_LOW_OPACITY_COLOR;
    } else {
      return LIGHT_THEME_LOW_OPACITY_COLOR;
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
      return DARK_THEME_TEXT_COLOR;
    } else {
      return LIGHT_THEME_TEXT_COLOR;
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
