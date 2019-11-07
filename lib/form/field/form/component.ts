import {Component, Input, Output, EventEmitter, OnChanges, SimpleChanges, ViewContainerRef, ComponentRef, ChangeDetectionStrategy, OnDestroy, ComponentFactoryResolver, SimpleChange} from '@angular/core';

import {Subscription} from 'rxjs';

import {FormField} from '../../form_field';

import {CyberUiFormFieldComponentInterface} from '../defs/form_field_component';
import {CyberUiFormFieldEvent} from '../defs/form_field_event';

import {CyberUiFormFieldComponentResolver} from './resolver.service';
import {filter} from 'rxjs/operators';


// A generic component that dynamically instantiates the appropriate form field component based on the field's config
@Component({
  selector: 'cyber-ui-form-field',
  template: '',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CyberUiFormFieldComponent implements CyberUiFormFieldComponentInterface, OnChanges, OnDestroy {

  // The ref to the current field component
  componentRef: ComponentRef<CyberUiFormFieldComponentInterface>;
  // The current component output subscription
  eventsSubscription: Subscription;

  constructor(
    readonly componentFactoryResolver: ComponentFactoryResolver,
    readonly viewContainerRef: ViewContainerRef,
    readonly formFieldComponentResolver: CyberUiFormFieldComponentResolver,
  ) {}

  @Input() field: FormField;

  @Input() model: {};

  @Output() event: EventEmitter<CyberUiFormFieldEvent> = new EventEmitter();
  // Convenience methods for easy responding to events from templates
  @Output() change = this.event.pipe(filter(event => event.type === 'change'));
  @Output() save = this.event.pipe(filter(event => event.type === 'save'));

  ngOnChanges(changes: SimpleChanges) {
    if (changes.field) {
      // TODO Only clear the view and instantiate a new component if the component has actually changed
      // Otherwise, just update the existing component instance's inputs and its ngOnChanges method
      this.viewContainerRef.clear();
      this.componentRef = this.viewContainerRef.createComponent(
        this.componentFactoryResolver.resolveComponentFactory(
          this.formFieldComponentResolver.getComponentForField(changes.field.currentValue)
        )
      );
      // Set the model before the field, since the model should already be available when conducting
      // field-specific initialization
      this.componentRef.instance.model = this.model;
      this.componentRef.instance.field = this.field;
      // Manually run the created component's ngOnChanges lifecycle hook if present,
      // since it doesn't get called automatically on dynamically-created components
      if (this.componentRef.instance.ngOnChanges) {
        this.componentRef.instance.ngOnChanges({
          model: new SimpleChange(undefined, this.componentRef.instance.model, true),
          field: new SimpleChange(undefined, this.componentRef.instance.field, true),
        });
      }
      this.unsubscribeFromOldSubscriptionIfApplicable();
      this.componentRef.instance.event.subscribe(event => this.event.emit(event));
    }
  }

  unsubscribeFromOldSubscriptionIfApplicable() {
    if (this.eventsSubscription && !this.eventsSubscription.closed) {
      this.eventsSubscription.unsubscribe();
    }
  }

  ngOnDestroy() {
    this.unsubscribeFromOldSubscriptionIfApplicable();
  }
}
