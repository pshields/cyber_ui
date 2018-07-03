import {Component} from '@angular/core';

import {DemoAppExampleFormModel} from './example_form_model';


@Component({
  selector: 'cyber-ui-form-fields-demo',
  templateUrl: './component.html',
  styleUrls: ['./component.scss'],
})
export class FormFieldsDemoComponent {
  exampleFormModel = new DemoAppExampleFormModel();
}
