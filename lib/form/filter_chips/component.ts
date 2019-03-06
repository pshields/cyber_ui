import {Component, Input} from '@angular/core';
import {FormField} from '../form_field';


@Component({
  selector: 'cyber-ui-filter-chips',
  templateUrl: './component.html',
})
export class CyberUiFilterChipsComponent {
  @Input() filters: FormField[];
}
