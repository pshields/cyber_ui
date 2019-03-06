import {Component, ViewChild, Input} from '@angular/core';
import {MatMenuTrigger} from '@angular/material';

import {ChoiceField} from '../../fields/choice';


@Component({
  templateUrl: './component.html',
  styleUrls: ['./component.scss'],
})
export class CyberUiChoiceFieldMenuComponent {
  // The field to show in a menu
  @Input() field: ChoiceField;
  // The menu trigger, to be called by the component that creates this component
  @ViewChild('trigger', {read: MatMenuTrigger}) trigger: MatMenuTrigger;
}
