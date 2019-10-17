import {Component, Input, Output, EventEmitter} from '@angular/core';

import {CyberUiFormFieldService} from '../service';

import {DiscreteProbabilityDistributionField} from './field';


@Component({
  selector: 'cyber-ui-discrete-probability-distribution-field',
  templateUrl: 'component.html',
  styleUrls: ['component.scss'],
})
export class CyberUiDiscreteProbabilityDistributionFieldComponent {

  constructor(
    readonly service: CyberUiFormFieldService,
  ) {}

  @Input() field: DiscreteProbabilityDistributionField;

  @Input() model: {};

  @Output() change = new EventEmitter();

  @Output() save = new EventEmitter();

}
