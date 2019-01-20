import {Injectable} from '@angular/core';

import {Observable, ReplaySubject} from 'rxjs';


@Injectable({providedIn: 'root'})
export class CyberUiThemeService {
  private currentThemeIds = new ReplaySubject<string>(1);
  // An up-to-date reference to the current theme's id
  public currentThemeId: string;

  constructor() {
    // Keep currentThemeId up to date
    this.currentThemeIds.subscribe(id => this.currentThemeId = id);
    // Push the initial theme value
    // TODO Get this from the settings service
    this.currentThemeIds.next('material');
  }

  // Returns an observable which emits the current theme's id
  getThemeId(): Observable<string> {
    return this.currentThemeIds;
  }

}
