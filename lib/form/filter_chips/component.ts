import {Component, ComponentFactory, ComponentFactoryResolver, Input, ViewContainerRef} from '@angular/core';

import {FormField} from '../form_field';
import {ChoiceField} from '../fields/choice';
import {CyberUiChoiceFieldMenuComponent} from '../menus/choice_field/component';


@Component({
  selector: 'cyber-ui-filter-chips',
  templateUrl: './component.html',
  styleUrls: ['./component.scss'],
})
export class CyberUiFilterChipsComponent {
  // The filters to show
  @Input() filters: FormField[];
  // The settings object to manipulate
  @Input() settings: {};

  constructor(readonly componentFactoryResolver: ComponentFactoryResolver) {}

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
      // Trigger the menu
      // Needs to be done asynchronously to wait for the component's view to init
      setTimeout(() => cmpRef.instance.trigger.openMenu(), 0);
    } else {
      // Log error / show snack about not knowing how to handle this type of field here yet
    }
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
}
