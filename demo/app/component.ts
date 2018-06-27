import {Component, ViewChild} from '@angular/core';

import {Router, NavigationEnd} from '@angular/router';

import {filter} from 'rxjs/operators';
import {MatSidenav} from '@angular/material';


@Component({
  selector: 'app-root',
  styleUrls: ['./component.scss'],
  templateUrl: './component.html',
})
export class AppComponent {
  @ViewChild(MatSidenav) sidenav: MatSidenav;

  constructor(readonly router: Router) {
    // Close the sidenav after navigation events
    this.router.events.pipe(
      filter(e => e instanceof NavigationEnd)
    ).subscribe(e => this.sidenav.close());
  }

}
