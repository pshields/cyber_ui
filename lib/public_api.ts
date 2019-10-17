// Public API surface of cyber_ui

// =========
// ATTENTION
// =========

export {CyberUiAttentionalAgendaDisplayModule} from './attention/agenda/display/module';
export {CyberUiAttentionalAgendaItemOptions} from './attention/agenda/defs/attentional_agenda_item_options';
export {CyberUiAttentionalAgendaService} from './attention/agenda/service';
export {CyberUiAttentionalAgendaSnapshot} from './attention/agenda/attentional_agenda_snapshot';

// ========
// BACKENDS
// ========

export {CyberUiFirestoreBackend} from './backends/firestore/backend';
export {CyberUiFirestoreBackedModel} from './backends/firestore/model';
export {CyberUiFirestoreBackedModelData} from './backends/firestore/data.interface';
export {CyberUiFirestoreBackedModelService} from './backends/firestore/service';
export {CyberUiFirestoreBackendModule} from './backends/firestore/module';

export {CyberUiFakeBackendModule} from './backends/fake/module';

export {CyberUiSavableModel} from './backends/interfaces/savable_model';
export {CYBER_UI_MODEL_SERVICE} from './backends/interfaces/model_service';

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
export {CyberUiDelegationMenuService} from './delegation/delegation_menu/service';
export {DelegationMenuState} from './delegation/delegation_menu/state';

export {delegationMenuActivationHandler} from './delegation/delegation_menu/util';

// ==========
// ENGAGEMENT
// ==========

export {CyberUiTimeSinceLastEngagementService} from './engagement/time_since_last_engagement/service';
export {CyberUiTimeSinceLastEngagementModule} from './engagement/time_since_last_engagement/module';

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
export {BooleanField} from './form/field/boolean';
export {ChoiceField, Option} from './form/field/choice/field';
export {CommaSeparatedListField} from './form/field/comma_separated_list';
export {DiscreteProbabilityDistributionField} from './form/field/discrete_probability_distribution';
export {FieldListListField} from './form/field/field_list_list';
export {TextField} from './form/field/text/field';
export {ValueInNumericRangeField} from './form/field/value_in_numeric_range';

// Common fields
export {COMPLETION_CRITERIA_TEXT_FIELD} from './form/field/common/completion_criteria';
export {ENERGY_LEVEL_FIELD} from './form/field/common/energy_level';

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
export {TaskProviderRegistryGetTasksResponse} from './task/interfaces/task_provider_registry';
export {Task} from './task/interfaces/task';
export {Action} from './task/interfaces/action';
export {CyberUiActionContext} from './task/interfaces/action_context';
export {TaskSuggestion} from './task/interfaces/task_suggestion';
export {TaskSuggestionService} from './task/interfaces/task_suggestion_service';
export {TaskSuggestionServiceGetSuggestionsBaseOptions} from './task/interfaces/task_suggestion_service';
export {TaskSuggestionServiceGetSuggestionsBaseResponse} from './task/interfaces/task_suggestion_service';
export {CyberUiMindfullyAttendToTopicUserResponseEvent} from './task/providers/mindfully_attend_to_topic/defs/user_response_event';
export {CyberUiMindfullyAttendToTopicTask} from './task/providers/mindfully_attend_to_topic/defs/task';
export {CyberUiTopicRegistration} from './task/providers/mindfully_attend_to_topic/topic_registration';

// Identifiers
export {CYBER_UI_MINDFULLY_ATTEND_TO_TOPIC_TASK_PROVIDER_ID} from './task/providers/mindfully_attend_to_topic/provider';

// Injection tokens
export {TASK_SUGGESTION_SERVICE} from './task/injection_tokens/task_suggestion_service';

// Reference implementations
export {TaskProviderRegistryService} from './task/provider_registry/service';

// Components and modules
export {CyberUiActionContextModule} from './task/action_context/module';
export {CyberUiMinimalTaskCardListComponent} from './task/displays/minimal_card_list/component';
export {CyberUiMinimalTaskCardListModule} from './task/displays/minimal_card_list/module';
export {CyberUiTasksModule} from './task/module';
export {CyberUiTaskAccordionComponent} from './task/displays/accordion/component';
export {CyberUiTaskAccordionModule} from './task/displays/accordion/module';
export {CyberUiMinimalTaskCardComponent} from './task/displays/minimal_card/component';
export {CyberUiMinimalTaskCardModule} from './task/displays/minimal_card/module';
export {CyberUiMinimalTaskComponent} from './task/displays/minimal/component';
export {CyberUiMinimalTaskModule} from './task/displays/minimal/module';
export {CyberUiMinimalTaskListComponent} from './task/displays/minimal_list/component';
export {CyberUiMinimalTaskListModule} from './task/displays/minimal_list/module';

// Labels
export {CYBER_UI_MINDFULLY_ATTEND_TO_TOPIC_TASK_PROVIDER_LABEL} from './task/providers/mindfully_attend_to_topic/provider';

// Providers
export {CyberUiMindfullyAttendToTopicTaskProvider} from './task/providers/mindfully_attend_to_topic/provider';
export {CyberUiMindfullyAttendToTopicTaskProviderModule} from './task/providers/mindfully_attend_to_topic/module';

// Task actions panel
export {CyberUiActionsPanelComponent} from './task/displays/action_panel/component';
export {CyberUiActionsPanelModule} from './task/displays/action_panel/module';

// Response chips
export {CyberUiResponseChipsComponent} from './task/displays/response_chips/component';
export {CyberUiResponseChipsModule} from './task/displays/response_chips/module';

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

// ======
// STATUS
// ======

export {CyberUiStatusIndicatorModule} from './status/indicator/module';
export {CyberUiStatusIndicatorState} from './status/indicator/state';

// =======
// THEMING
// =======

export {CyberUiThemeModule} from './theme/module';
export {CyberUiThemeService} from './theme/service';
export {CYBER_UI_MATERIAL_THEME_SETTINGS} from './theme/material/settings';

// =========
// WORKFLOWS
// =========

export {WorkflowSettingsService} from './workflow/interfaces/workflow_settings_service';
export {WORKFLOW_SETTINGS_SERVICE} from './workflow/injection_tokens/workflow_settings_service';

export {CyberUiAddThingWorkflowComponent} from './workflow/add_thing/component';
export {CyberUiAddThingWorkflowExitEvent} from './workflow/add_thing/exit.event';
export {CyberUiAddThingWorkflowModule} from './workflow/add_thing/module';
export {CyberUiAddThingWorkflowService} from './workflow/add_thing/service';
export {CYBER_UI_ADD_THING_WORKFLOW_DISPLAY_COMPONENT} from './workflow/add_thing/injection_token';
export {CyberUiAddThingWorkflowDefaultDisplayComponent} from './workflow/add_thing/displays/default/component';
export {CyberUiAddThingWorkflowDefaultDisplayModule} from './workflow/add_thing/displays/default/module';

export {CyberUiWorkOnTasksWorkflowComponent} from './workflow/work_on_tasks/component';
export {CyberUiWorkOnTasksWorkflowService} from './workflow/work_on_tasks/service';
export {CyberUiWorkOnTasksWorkflowModule} from './workflow/work_on_tasks/module';

// ====
// UTIL
// ====

export {ActiveTimeboxesSnapshot} from './util/timebox/defs/active_timeboxes_snapshot';
export {CYBER_UI_MAT_DIALOG_DEFAULT_CONFIG} from './util/dialog.config';
export {CyberUiTimeboxService} from './util/timebox/service';
export {CyberUiTimeboxModule} from './util/timebox/module';
export {Timebox} from './util/timebox/defs/timebox';
export {TimeboxId} from './util/timebox/defs/timebox_id';
export {CyberUiTimeboxCountdownDisplayModule} from './util/timebox/countdown_display/module';
