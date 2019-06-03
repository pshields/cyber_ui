import {Component, ComponentFactory, ComponentFactoryResolver, Input, ViewContainerRef} from '@angular/core';

import {first} from 'rxjs/operators';

import {CyberUiInteractiveModel} from '../../model/interfaces/interactive_model';

import {FormField} from '../form_field';
import {ChoiceField} from '../fields/choice';
import {CyberUiChoiceFieldMenuComponent} from '../menus/choice_field/component';


// Trailing icon names to re-use
const TRAILING_ICON = {
  ARROW_DROP_DOWN: 'arrow_drop_down',
  CLOSE: 'close',
};


@Component({
  selector: 'cyber-ui-filter-chips',
  templateUrl: './component.html',
  styleUrls: ['./component.scss'],
})
export class CyberUiFilterChipsComponent {
  // The filters to show
  @Input() filters: FormField[];
  // The settings object to manipulate
  @Input() settings: CyberUiInteractiveModel;

  constructor(readonly componentFactoryResolver: ComponentFactoryResolver) {}

  // Clears the filter
  clearFilter(field: FormField) {
    delete this.settings[field.config.propertyName];
  }

  handleClick(field: FormField, viewContainer: ViewContainerRef) {
    // Clear the previous menu, if one exists
    viewContainer.clear();
    // If the field is a choice field, bring up the choices in a menu
    if (field instanceof ChoiceField) {
      const factory: ComponentFactory<CyberUiChoiceFieldMenuComponent> = this.componentFactoryResolver.resolveComponentFactory(CyberUiChoiceFieldMenuComponent);
      const cmpRef = viewContainer.createComponent(factory);
      // Link the menu to the field
      cmpRef.instance.field = field;
      // Link up the menu to the settings
      cmpRef.instance.model = this.settings;
      // Subscribe to the first clear action taken from the menu, and clear the filter when that happens
      cmpRef.instance.clear.pipe(first()).subscribe(() => {
        this.clearFilter(field);
        // Close the menu
        cmpRef.instance.trigger.closeMenu();
      });
      // Trigger the menu
      // Needs to be done asynchronously to wait for the component's view to init
      setTimeout(() => cmpRef.instance.trigger.openMenu(), 0);
    } else {
      // Log error / show snack about not knowing how to handle this type of field here yet
    }
  }

  handleIconClick(field: FormField, viewContainer: ViewContainerRef, event?: MouseEvent) {
    // If the field is currently active, clicking the icon clears the filter
    // Otherwise, it should have the same behavior as clicking the rest of the chip
    if (this.isFilterActive(field)) {
      this.clearFilter(field);
    } else {
      this.handleClick(field, viewContainer);
    }
    // Since the click was handled here, stop it from bubbling up
    if (event) {
      event.stopPropagation();;
    }
    return false;
  }

  // Returns the label to use for this filter chip (dynamic based on the field's current value)
  getLabelForField(field: FormField) {
    if (this.settings[field.config.propertyName] !== undefined) {
      return `${field.config.label}: ${field.format(this.settings[field.config.propertyName])}`;
    } else {
      return field.config.label;
    }
  }

  // Returns whether this filter chip is considered active or not
  isFilterActive(field: FormField) {
    return this.settings[field.config.propertyName] !== undefined;
  }

  getTrailingIconName(field: FormField) {
    // If the filter is active, show the close icon
    // Otherwise, show the drop down icon
    if (this.isFilterActive(field)) {
      return TRAILING_ICON.CLOSE;
    } else {
      return TRAILING_ICON.ARROW_DROP_DOWN;
    }
  }
}
