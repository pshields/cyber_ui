import {Component} from '@angular/core';
import {Router} from '@angular/router';

import {MatSnackBar} from '@angular/material';

import {DelegationMenuService} from 'lib/public_api';


@Component({
  selector: 'app-root',
  styleUrls: ['./component.scss'],
  templateUrl: './component.html',
})
export class AppComponent {

  constructor(
    readonly delegationMenuService: DelegationMenuService,
    readonly snackbar: MatSnackBar,
    readonly router: Router) {
      // Register a fake delegation target for demo purposes
      delegationMenuService.registerDelegationTarget({
        label: 'The void',
        handler: () => {
          this.snackbar.open('This task has been delegated to the void');
        },
      });
    }
}
