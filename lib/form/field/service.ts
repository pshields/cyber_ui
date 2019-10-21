import {Injectable} from '@angular/core';

import {MatDialog} from '@angular/material/dialog';
import {ComponentType} from '@angular/cdk/portal';


// This service exposes reusable functionality for individual field components
@Injectable({providedIn: 'root'})
export class CyberUiFormFieldService {

  constructor(
    // TODO Decouple MatDialog here; any service that provides a dialog should be allowed
    // In general, Cyber UI should not be tightly coupled to Angular Material
    readonly dialog: MatDialog,
  ) {}

  // Opens the given Angular component in a dialog
  openHelpDialog(component: ComponentType<unknown>) {
    this.dialog.open(component);
  }

}
