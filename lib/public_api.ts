// Public API surface of cyber_ui

// ========
// BACKENDS
// ========

export {CyberUiFirestoreBackend} from './backends/firestore/backend';
export {CyberUiFirestoreBackedModel} from './backends/firestore/model';
export {CyberUiFirestoreBackedModelData} from './backends/firestore/data.interface';
export {CyberUiFirestoreBackedModelService} from './backends/firestore/service';
export {CyberUiFirestoreBackendModule} from './backends/firestore/module';

// =====
// FORMS
// =====

export {CyberUiAutofocusModule} from './form/autofocus/module';
export {CyberUiFormFieldsModule} from './form/form_fields/module';

// Although abstract, it's import to at least export the type since consumers may want to use it
export {FormField} from './form/form_field';
// These types are also needed since FormField is parameterized by them
export {FormFieldOptions, FormFieldConfig} from './form/form_field_config';

// Consumers will want to express an element preference using FormFieldElement
export {FormFieldElement} from './form/form_field_element.enum';

// Export the various fields
export {BooleanField} from './form/fields/boolean';
export {ChoiceField, Option} from './form/fields/choice';
export {CommaSeparatedListField} from './form/fields/comma_separated_list';
export {DiscreteProbabilityDistributionField} from './form/fields/discrete_probability_distribution';
export {TextField} from './form/fields/text';
export {ValueInNumericRangeField} from './form/fields/value_in_numeric_range';

// ------------------
// Edit dialog module
// ------------------
export {CyberUiEditDialogComponent} from './form/edit_dialog/component';
export {CyberUiEditDialogModule} from './form/edit_dialog/module';
export {CyberUiEditDialogParams} from './form/edit_dialog/params';
export {CyberUiEditDialogService} from './form/edit_dialog/service';

// =====
// TASKS
// =====

// Interfaces
export {TaskProvider} from './task/interfaces/task_provider';
export {TaskProviderGetTasksOptions} from './task/interfaces/task_provider';
export {TaskProviderGetTasksResponse} from './task/interfaces/task_provider';
export {Task} from './task/interfaces/task';
export {Action} from './task/interfaces/action';
export {CyberUiActionContext} from './task/interfaces/action_context';
export {TaskSuggestion} from './task/interfaces/task_suggestion';
export {TaskSuggestionService} from './task/interfaces/task_suggestion_service';
export {TaskSuggestionServiceGetSuggestionsBaseOptions} from './task/interfaces/task_suggestion_service';
export {TaskSuggestionServiceGetSuggestionsBaseResponse} from './task/interfaces/task_suggestion_service';

// Injection tokens
export {TASK_SUGGESTION_SERVICE} from './task/injection_tokens/task_suggestion_service';

// Reference implementations
export {TaskProviderRegistryService} from './task/task_provider_registry.service';
export {CyberUiWorkOnThingTaskProvider} from './task/providers/work_on_thing/provider';

// Components and modules
export {CyberUiTasksModule} from './task/module';
export {CyberUiTaskAccordionComponent} from './task/displays/accordion/component';
export {CyberUiTaskAccordionModule} from './task/displays/accordion/module';
export {CyberUiMinimalTaskDisplayModule} from './task/displays/minimal/module';

// Task actions panel
export {CyberUiActionsPanelComponent} from './task/displays/action_panel/component';
export {CyberUiActionsPanelModule} from './task/displays/action_panel/module';

// ===========
// PROBABILITY
// ===========

export {Outcome} from './probability/interfaces/outcome';
export {Probability} from './probability/interfaces/probability';
export {OutcomeProbabilityAssignment} from './probability/interfaces/outcome_probability_assignment';
export {DiscreteProbabilityDistribution} from './probability/interfaces/discrete_probability_distribution';

// =====================
// PREDICTION MANAGEMENT
// =====================

export {PredictableThing} from './prediction/interfaces/predictable_thing';
export {Prediction} from './prediction/interfaces/prediction';

// ==========
// DELEGATION
// ==========

export {DelegationTarget} from './delegation/interfaces/delegation_target';
export {DelegationMenuComponent} from './delegation/delegation_menu/component';
export {CyberUiDelegationMenuModule} from './delegation/delegation_menu/module';
export {DelegationMenuService} from './delegation/delegation_menu/service';
export {DelegationMenuState} from './delegation/delegation_menu/state';

export {delegationMenuActivationHandler} from './delegation/delegation_menu/util';

// ======
// SNOOZE
// ======

// Snooze reason collection dialog
export {CyberUiSnoozeReasonCollectionDialogComponent} from './snooze/reason_collection_dialog/component';
export {CyberUiSnoozeReasonCollectionDialogModule} from './snooze/reason_collection_dialog/module';
export {CyberUiSnoozeReasonCollectionDialogService} from './snooze/reason_collection_dialog/service';


// =========
// Workflows
// =========

export {WorkflowSettingsService} from './workflows/interfaces/workflow_settings_service';
export {WORKFLOW_SETTINGS_SERVICE} from './workflows/injection_tokens/workflow_settings_service';

export {CyberUiWorkOnTasksWorkflowComponent} from './workflows/work_on_tasks/component';
export {CyberUiWorkOnTasksWorkflowModule} from './workflows/work_on_tasks/module';
