// Public API surface of cyber_ui

// ========
// BACKENDS
// ========

export {CyberUiFirestoreBackend} from './backends/firestore/backend';
export {CyberUiFirestoreBackedModel} from './backends/firestore/model';
export {CyberUiFirestoreBackedModelData} from './backends/firestore/data.interface';
export {CyberUiFirestoreBackedModelService} from './backends/firestore/service';
export {CyberUiFirestoreBackendModule} from './backends/firestore/module';

export {CyberUiFakeBackendModule} from './backends/fake/module';

export {CyberUiSavableModel} from './backends/interfaces/model';

// ==========
// DELEGATION
// ==========

export {CyberUiDelegateActionRequest} from './delegation/interfaces/delegate_action_request';
export {CyberUiDelegateActionResponse} from './delegation/interfaces/delegate_action_response';
export {CyberUiDelegationHistoryService} from './delegation/history/service';
export {DelegatableThing} from './delegation/interfaces/delegatable_thing';
export {DelegationActionRecord} from './delegation/interfaces/delegation_action_record';
export {DelegationHistoryField} from './delegation/fields/history/field';
export {DelegationTarget} from './delegation/interfaces/delegation_target';
export {DelegationMenuComponent} from './delegation/delegation_menu/component';
export {CyberUiDelegationMenuModule} from './delegation/delegation_menu/module';
export {DelegationMenuService} from './delegation/delegation_menu/service';
export {DelegationMenuState} from './delegation/delegation_menu/state';

export {delegationMenuActivationHandler} from './delegation/delegation_menu/util';

// =====
// FORMS
// =====

export {CyberUiAutofocusModule} from './form/autofocus/module';
export {CyberUiFormFieldsComponent} from './form/form_fields/component';
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
export {FieldListListField} from './form/fields/field_list_list';
export {TextField} from './form/fields/text';
export {ValueInNumericRangeField} from './form/fields/value_in_numeric_range';

// Common fields
export {COMPLETION_CRITERIA_TEXT_FIELD} from './form/fields/common/completion_criteria';
export {ENERGY_LEVEL_FIELD} from './form/fields/common/energy_level';

export {CYBER_UI_SHOW_EDIT_DIALOG_CANCEL_ACTION} from './form/edit_dialog/service';

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
export {CyberUiMinimalTaskCardListComponent} from './task/displays/minimal_card_list/component';
export {CyberUiMinimalTaskCardListModule} from './task/displays/minimal_card_list/module';
export {CyberUiTasksModule} from './task/module';
export {CyberUiTaskAccordionComponent} from './task/displays/accordion/component';
export {CyberUiTaskAccordionModule} from './task/displays/accordion/module';
export {CyberUiMinimalTaskCardComponent} from './task/displays/minimal_card/component';
export {CyberUiMinimalTaskCardModule} from './task/displays/minimal_card/module';

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

// ========
// SETTINGS
// ========

export {CyberUiSettingsDialogComponent} from './settings/dialog/component';
export {CyberUiSettingsDialogService} from './settings/dialog/service';
export {CyberUiSettingsDialogModule} from './settings/dialog/module';
export {CyberUiSettingsService} from './settings/service/service';
export {SettingsSectionConfigItem} from './settings/interfaces/section_config';

// ======
// SNOOZE
// ======

// Snooze reason collection dialog
export {CyberUiSnoozeReasonCollectionDialogComponent} from './snooze/reason_collection_dialog/component';
export {CyberUiSnoozeReasonCollectionDialogModule} from './snooze/reason_collection_dialog/module';
export {CyberUiSnoozeReasonCollectionDialogService} from './snooze/reason_collection_dialog/service';

// =======
// THEMING
// =======

export {CyberUiThemeModule} from './theme/module';
export {CyberUiThemeService} from './theme/service';
export {CYBER_UI_MATERIAL_THEME_SETTINGS} from './theme/material/settings';

// =========
// Workflows
// =========

export {WorkflowSettingsService} from './workflows/interfaces/workflow_settings_service';
export {WORKFLOW_SETTINGS_SERVICE} from './workflows/injection_tokens/workflow_settings_service';

export {CyberUiAddThingWorkflowModule} from './workflows/add_thing/module';
export {CYBER_UI_ADD_THING_WORKFLOW_DISPLAY_COMPONENT} from './workflows/add_thing/display_component';

export {CyberUiWorkOnTasksWorkflowComponent} from './workflows/work_on_tasks/component';
export {CyberUiWorkOnTasksWorkflowModule} from './workflows/work_on_tasks/module';


// ====
// UTIL
// ====

export {CYBER_UI_MAT_DIALOG_DEFAULT_CONFIG} from './util/dialog.config';
