import {Component, Input, Output, EventEmitter, OnChanges, SimpleChanges, ViewContainerRef, ComponentRef, ChangeDetectionStrategy, OnDestroy, ComponentFactoryResolver} from '@angular/core';

import {Subscription} from 'rxjs';

import {FormField} from '../../form_field';

import {CyberUiFormFieldComponentInterface} from '../defs/form_field_component';

import {CyberUiFormFieldComponentResolver} from './resolver.service';


// A generic component that dynamically instantiates the appropriate form field component based on the field's config
@Component({
  selector: 'cyber-ui-form-field',
  template: '',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CyberUiFormFieldComponent implements CyberUiFormFieldComponentInterface, OnChanges, OnDestroy {

  // The ref to the current field component
  componentRef: ComponentRef<CyberUiFormFieldComponentInterface>;
  // The current component output subscriptions
  changeSubscription: Subscription;
  saveSubscription: Subscription;

  constructor(
    readonly componentFactoryResolver: ComponentFactoryResolver,
    readonly viewContainerRef: ViewContainerRef,
    readonly formFieldComponentResolver: CyberUiFormFieldComponentResolver,
  ) {}

  @Input() field: FormField;

  @Input() model: {};

  @Output() change: EventEmitter<void> = new EventEmitter();

  @Output() save: EventEmitter<void> = new EventEmitter();

  ngOnChanges(changes: SimpleChanges) {
    if (changes.field) {
      // TODO Consider if there's a more efficient way to do this
      // Does the view really need to be cleared and repopulated on *every* field change?
      // It's definitely simpler to do that, though
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
      this.unsubscribeFromSubscriptionsIfApplicable();
      this.componentRef.instance.change.subscribe(() => this.change.emit());
      this.componentRef.instance.save.subscribe(() => this.save.emit());
    }
  }

  unsubscribeFromSubscriptionsIfApplicable() {
    if (this.changeSubscription && !this.changeSubscription.closed) {
      this.changeSubscription.unsubscribe();
    }
    if (this.saveSubscription && !this.saveSubscription.closed) {
      this.saveSubscription.unsubscribe();
    }
  }

  ngOnDestroy() {
    this.unsubscribeFromSubscriptionsIfApplicable();
  }
}