import {Component} from '@angular/core';

import {Router} from '@angular/router';


@Component({
  selector: 'app-root',
  styleUrls: ['./component.scss'],
  templateUrl: './component.html',
})
export class AppComponent {
  constructor(readonly router: Router) {}
}
