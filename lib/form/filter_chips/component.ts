import {Component, ComponentFactory, ComponentFactoryResolver, Input, ViewContainerRef} from '@angular/core';

import {FormField} from '../form_field';
import {ChoiceField} from '../fields/choice';
import {CyberUiChoiceFieldMenuComponent} from '../menus/choice_field/component';


@Component({
  selector: 'cyber-ui-filter-chips',
  templateUrl: './component.html',
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
      // Link up the menu to the field
      cmpRef.instance.field = field;
      // Trigger the menu
      // Needs to be done asynchronously to wait for the component's view to init
      setTimeout(() => cmpRef.instance.trigger.openMenu(), 0);
    }
  }
}
