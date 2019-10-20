import {Component} from '@angular/core';

import {of} from 'rxjs';

import {CyberUiEditDialogService} from 'lib/public_api';

import {DemoAppExampleFormModel} from './example_form_model';


@Component({
  selector: 'cyber-ui-form-fields-demo',
  templateUrl: './component.html',
  styleUrls: ['./component.scss'],
})
export class FormFieldsDemoComponent {
  exampleFormModel = new DemoAppExampleFormModel();

  constructor(
    readonly editDialogService: CyberUiEditDialogService
  ) {}

  showEditDialog() {
    this.editDialogService.showEditDialog({
      contentTypeLabel: 'model form',
      fields: of(this.exampleFormModel.fields),
      model: this.exampleFormModel,
    })
  }
}
