// Public API surface of cyber_ui

// ============
// FORMS MODULE
// ============

export {CyberUiAutofocusModule} from './forms_module/autofocus/module';
export {CyberUiFormFieldsModule} from './forms_module/form_fields/module';

// Although abstract, it's import to at least export the type since consumers may want to use it
export {FormField} from './forms_module/form_field';
// These types are also needed since FormField is parameterized by them
export {FormFieldOptions, FormFieldConfig} from './forms_module/form_field_config';

// Consumers will want to express an element preference using FormFieldElement
export {FormFieldElement} from './forms_module/form_field_element.enum';

// Export the various fields
export {BooleanField} from './forms_module/fields/boolean';
export {ChoiceField, Option} from './forms_module/fields/choice';
export {CommaSeparatedListField} from './forms_module/fields/comma_separated_list';
export {TextField} from './forms_module/fields/text';
export {ValueInNumericRangeField} from './forms_module/fields/value_in_numeric_range';

// =====
// TASKS
// =====

export {TaskProvider} from './tasks_module/interfaces/task_provider';
export {TaskProviderGetTasksOptions} from './tasks_module/interfaces/task_provider';
export {TaskProviderGetTasksResponse} from './tasks_module/interfaces/task_provider';

export {Task} from './tasks_module/interfaces/task';
export {Action} from './tasks_module/interfaces/action';

export {TaskSuggestion} from './tasks_module/interfaces/task_suggestion';
export {TaskSuggestionService} from './tasks_module/interfaces/task_suggestion_service';
export {TaskSuggestionServiceGetSuggestionsBaseOptions} from './tasks_module/interfaces/task_suggestion_service';
export {TaskSuggestionServiceGetSuggestionsBaseResponse} from './tasks_module/interfaces/task_suggestion_service';
export {TASK_SUGGESTION_SERVICE} from './tasks_module/injection_tokens/task_suggestion_service';

export {TaskProviderRegistryService} from './tasks_module/task_provider_registry.service';

export {CyberUiTasksModule} from './tasks_module/module';

// =========
// Workflows
// =========

export {WorkflowSettingsService} from './workflows/interfaces/workflow_settings_service';
export {WORKFLOW_SETTINGS_SERVICE} from './workflows/injection_tokens/workflow_settings_service';

export {CyberUiWorkOnTasksAccordionWorkflowComponent} from './workflows/work_on_tasks/accordion/component';
export {CyberUiWorkOnTasksAccordionWorkflowModule} from './workflows/work_on_tasks/accordion/module';
