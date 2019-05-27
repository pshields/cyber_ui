import {Component, ComponentRef, ComponentFactoryResolver, EventEmitter, Inject, Type, ViewContainerRef} from '@angular/core';

import {CyberUiSavableModel} from '../../backends/interfaces/model';
import {CYBER_UI_MODEL_SERVICE, CyberUiModelService} from '../../backends/interfaces/model_service';

import {CyberUiAddThingWorkflowDisplayComponent} from './displays/default/component';
import {CYBER_UI_ADD_THING_WORKFLOW_DISPLAY_COMPONENT} from './injection_token';
import {CyberUiAddThingWorkflowExitEvent} from './exit.event';


// TODO At some point, refactor this component to allow for dynamic changing of the display component
@Component({
  selector: 'cyber-ui-add-thing-workflow',
  template: '',
})
export class CyberUiAddThingWorkflowComponent {

  // The model object which will retain the user-inputted data and get saved to the backend
  model: CyberUiSavableModel;

  // A reference to the display component, once created by the component factory
  displayComponentRef: ComponentRef<CyberUiAddThingWorkflowDisplayComponent>;

  // Stream of exit events (only 1 expected, indicating when the workflow is finished)
  exits = new EventEmitter<CyberUiAddThingWorkflowExitEvent>();

  constructor(
    @Inject(CYBER_UI_MODEL_SERVICE) readonly modelService: CyberUiModelService,
    // Common display component choices might include:
    // * cyber-ui-minimal-task-card
    // * cyber-ui-form-fields
    @Inject(CYBER_UI_ADD_THING_WORKFLOW_DISPLAY_COMPONENT) readonly displayComponent: Type<CyberUiAddThingWorkflowDisplayComponent>,
    readonly componentFactoryResolver: ComponentFactoryResolver,
    readonly viewContainerRef: ViewContainerRef,
  ) {
    // Instantiate the display component
    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(displayComponent);
    this.displayComponentRef = this.viewContainerRef.createComponent(componentFactory);
    // Get a new empty model and hook it up to the display component
    this.model = modelService.getNewEmptyModel();
    this.displayComponentRef.instance.model = this.model;
    // Handle save and exit events from the display component
    this.displayComponentRef.instance.saves.subscribe(model => this.handleSave(model));
    this.displayComponentRef.instance.exits.subscribe(() => this.handleExit());
  }

  handleExit() {
    this.exits.emit({});
  }

  handleSave(model: CyberUiSavableModel) {
    model.save().then(
      () => this.exits.emit({model: model}),
      error => {} // TODO Handle this error
    );
  }

  // Discards the existing model and gets a new one
  clearModel() {
    this.model = this.modelService.getNewEmptyModel();
    this.displayComponentRef.instance.model = this.model;
  }

}
