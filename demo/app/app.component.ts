import {Component} from '@angular/core';

import {DemoAppExampleFormModel} from './example_form_model';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  exampleFormModel = new DemoAppExampleFormModel();
}
