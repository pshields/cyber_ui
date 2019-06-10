import {Component} from '@angular/core';
import {MatDialog} from '@angular/material/dialog';

import {CyberUiEditDialogComponent} from 'lib/public_api';

import {DemoAppExampleFormModel} from './example_form_model';


@Component({
  selector: 'cyber-ui-form-fields-demo',
  templateUrl: './component.html',
  styleUrls: ['./component.scss'],
})
export class FormFieldsDemoComponent {
  exampleFormModel = new DemoAppExampleFormModel();

  constructor(readonly dialog: MatDialog) {}

  showEditDialog() {
    this.dialog.open(CyberUiEditDialogComponent, {
      data: {
        contentTypeLabel: 'model form',
        model: this.exampleFormModel,
      }
    });
  }
}
