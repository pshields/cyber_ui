import {Injectable} from '@angular/core';

import {MatDialog} from '@angular/material/dialog';
import {ComponentType} from '@angular/cdk/portal';


// This service exposes reusable functionality for individual field components
@Injectable({providedIn: 'root'})
export class CyberUiFormFieldService {

  constructor(
    readonly dialog: MatDialog,
  ) {}

  // Opens the given Angular component in a dialog
  openHelpDialog(component: ComponentType<unknown>) {
    this.dialog.open(component);
  }

}
