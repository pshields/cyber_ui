import {Component, ViewChild} from '@angular/core';
import {Router, NavigationEnd} from '@angular/router';

import {MatSidenav} from '@angular/material';
import {MatSnackBar} from '@angular/material';

import {BreakpointObserver, Breakpoints} from '@angular/cdk/layout';

import {filter} from 'rxjs/operators';

import {DelegationMenuService} from 'lib/public_api';


@Component({
  selector: 'app-root',
  styleUrls: ['./component.scss'],
  templateUrl: './component.html',
})
export class AppComponent {
  // A reference to the app sidenav
  @ViewChild(MatSidenav) sidenav: MatSidenav;

  // The mode of the Material Sidenav
  // This is set based on the viewport size
  // The initial value does not matter that much
  sidenavMode = 'side';

  constructor(
    readonly breakpointObserver: BreakpointObserver,
    readonly delegationMenuService: DelegationMenuService,
    readonly snackbar: MatSnackBar,
    readonly router: Router) {
      // Register a fake delegation target for demo purposes
      delegationMenuService.registerDelegationTarget({
        label: 'The void',
        handler: () => {
          this.snackbar.open('Delegated to the void');
        },
      });
      // Listen for viewport size changes, and set the sidenav mode accordingly
      breakpointObserver.observe([
        Breakpoints.Handset,
      ]).subscribe(result => this.setSidenavMode(result.matches));
      // On handset screen sizes, close the sidenav after navigation events
      this.router.events.pipe(
        filter(e => e instanceof NavigationEnd)
      ).subscribe(e => {
        // Only close the sidenav if on a handset screen size, where
        // screen real estate is at a premium
        if (this.sidenavMode === 'over') {
          this.sidenav.close();
        }
      });
  }

  setSidenavMode(isHandset: boolean) {
    if (isHandset) {
      this.sidenavMode = 'over';
    } else {
      this.sidenavMode = 'side';
    }
  }
}
