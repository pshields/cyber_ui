import {Component, HostBinding} from '@angular/core';

import {CyberUiThemeService} from 'lib/public_api';


// A splash page introducing Cyber UI
@Component({
  selector: 'splash-page-component',
  templateUrl: './component.html',
  styleUrls: ['./component.scss'],
})
export class SplashPageComponent {

  // The color of the primary text content on page
  // (dynamic based on theme settings)
  @HostBinding('style.color') color: string;

  constructor(themeService: CyberUiThemeService) {
    // Update the text color based on the current theme settings
    themeService.textColor.subscribe(color => {
      this.color = color;
    });
  }
}
