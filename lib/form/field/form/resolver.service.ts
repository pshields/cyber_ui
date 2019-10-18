import {Type} from '@angular/core';

import {ComponentType} from '@angular/cdk/portal';

import {FormFieldConfig} from '../../form_field_config';
import {FormField} from '../../form_field';

import {CyberUiFormFieldComponentInterface} from '../defs/form_field_component';
import {CyberUiUnimplementedFieldComponent} from '../unimplemented/component';

import {CYBER_UI_DEFAULT_FORM_FIELD_COMPONENTS_BY_CONFIG_CTOR} from './default_components_by_config_ctor';


// TODO Consider separating into an abstract class and separate impl, like Angular's ComponentFactoryResolver
// Would this make it easier for consumers to provide their own component resolver impl?
export class CyberUiFormFieldComponentResolver {

  readonly defaultComponentByConfigCtor = new Map<Type<FormFieldConfig>, Type<CyberUiFormFieldComponentInterface>>();

  // TODO Allow consumers to inject or set at runtime an alternate unimplemented placeholder component
  unimplementedPlaceholderComponent = CyberUiUnimplementedFieldComponent;

  constructor() {
    // TODO Consider moving this code somewhere else or making it optional or injected
    // This part add some reasonable default components for different field types
    CYBER_UI_DEFAULT_FORM_FIELD_COMPONENTS_BY_CONFIG_CTOR.forEach(obj => {
      this.defaultComponentByConfigCtor.set(obj.configCtor, obj.component);
    });
  }

  setDefaultComponentForConfigClass<
    CONFIG_T extends FormFieldConfig = FormFieldConfig,
  >(
    configCtor: Type<CONFIG_T>,
    component: ComponentType<CyberUiFormFieldComponentInterface>,
  ) {
    this.defaultComponentByConfigCtor.set(configCtor, component);
  }

  getComponentForField<
    FIELD_T extends FormField = FormField
  > (
    field: FIELD_T
  ) {
    return field.config.component || this.getComponentForConfigCtor(field.config.constructor as Type<FormFieldConfig>);
  }

  // TODO Allow this to be specified via injection token or dynamically at runtime
  getComponentForConfigCtor(
    configCtor: Type<FormFieldConfig>
  ): Type<CyberUiFormFieldComponentInterface> {
    return this.defaultComponentByConfigCtor.get(configCtor) || this.unimplementedPlaceholderComponent;
  }
}
