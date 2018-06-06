import {Component} from '@angular/core';

import {DemoAppExampleFormModel} from './example_form_model';


@Component({
  templateUrl: './component.html',
})
export class FormFieldsDemoComponent {
  exampleFormModel = new DemoAppExampleFormModel();
}
