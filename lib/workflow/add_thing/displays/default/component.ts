import {Component, EventEmitter, HostBinding} from '@angular/core';

import {CyberUiSavableModel} from '../../../../backends/interfaces/model';
import {getLabelField} from '../../../../form/fields/common/label';
import {FormField} from '../../../../form/form_field';
import {CyberUiThemeService} from '../../../../theme/service';


// TODO Make this dynamic and developer-configurable
const TEMPORARY_HARDCODED_FIELD_LIST = [
  getLabelField({autofocus: true, saveOnEnter: true})
];


// A default display component implementation for add-thing-workflow
// Developers may elect to provide a substitute display component via the
// CYBER_UI_ADD_THING_WORKFLOW_DISPLAY_COMPONENT injection token
@Component({
  templateUrl: 'component.html',
})
export class CyberUiAddThingWorkflowDefaultDisplayComponent {
  fields: FormField[] = TEMPORARY_HARDCODED_FIELD_LIST;
  model: CyberUiSavableModel;

  // If saving, the event will contain a reference to the model to save
  saves = new EventEmitter<CyberUiSavableModel>();
  exits = new EventEmitter<void>();

  @HostBinding('style.color') public color: string;

  constructor(themeService: CyberUiThemeService) {
    // Change the text color based on the current theme
    themeService.textColor.subscribe(color => {
      this.color = color;
    });
  }
}


// It's assumed that any substitute display component will still conform to the following type where relevant
@Component({
  template: ''
})
export class CyberUiAddThingWorkflowDisplayComponent {
  model: CyberUiSavableModel;

  saves: EventEmitter<CyberUiSavableModel>;
  exits: EventEmitter<void>;
}
