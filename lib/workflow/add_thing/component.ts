import {Component, ComponentRef, ComponentFactoryResolver, Inject, Type, ViewContainerRef} from '@angular/core';

import {CyberUiSavableModel} from '../../backends/interfaces/savable_model';
import {CYBER_UI_MODEL_SERVICE, CyberUiModelService} from '../../backends/interfaces/model_service';

import {CyberUiAddThingWorkflowDisplayComponent} from './displays/default/component';
import {CYBER_UI_ADD_THING_WORKFLOW_DISPLAY_COMPONENT} from './injection_token';
import {CyberUiAddThingWorkflowService} from './service';


// TODO At some point, refactor this component to allow for dynamic changing of the display component
@Component({
  selector: 'cyber-ui-add-thing-workflow',
  template: '',
})
export class CyberUiAddThingWorkflowComponent {

  // A reference to the display component, once created by the component factory
  displayComponentRef: ComponentRef<CyberUiAddThingWorkflowDisplayComponent>;

  constructor(
    @Inject(CYBER_UI_MODEL_SERVICE) readonly modelService: CyberUiModelService,
    // Common display component choices might include:
    // * cyber-ui-minimal-task-card
    // * cyber-ui-form-fields
    @Inject(CYBER_UI_ADD_THING_WORKFLOW_DISPLAY_COMPONENT) readonly displayComponent: Type<CyberUiAddThingWorkflowDisplayComponent>,
    readonly service: CyberUiAddThingWorkflowService,
    readonly componentFactoryResolver: ComponentFactoryResolver,
    readonly viewContainerRef: ViewContainerRef,
  ) {
    // Instantiate the display component
    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(displayComponent);
    this.displayComponentRef = this.viewContainerRef.createComponent(componentFactory);
    // Get a new empty model and hook it up to the display component
    this.displayComponentRef.instance.model = modelService.getNewEmptyModel();
    // Handle save and exit events from the display component
    this.displayComponentRef.instance.saves.subscribe(model => this.handleSave(model));
    this.displayComponentRef.instance.exits.subscribe(() => this.service.exitWorkflow());
  }

  handleSave(model: CyberUiSavableModel) {
    model.save().then(
      () => this.service.exitWorkflow({model: model}),
      error => console.error(error)
    );
  }

  // Discards the existing model and gets a new one
  clearModel() {
    this.displayComponentRef.instance.model = this.modelService.getNewEmptyModel();
  }

}
