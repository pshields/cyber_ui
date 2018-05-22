// Public API surface of cyber_ui

// ============
// FORMS MODULE
// ============

export {CyberUiFormsModule} from './forms_module/module';

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

// ============
// TASKS MODULE
// ============

export {TaskProvider, TaskProviderGetTasksOptions} from './tasks_module/interfaces/task_provider';
export {Task} from './tasks_module/interfaces/task';
export {TaskSuggestion} from './tasks_module/interfaces/task_suggestion';
export {TaskSuggestionEngine, TaskSuggestionEngineGetSuggestionsOptions} from './tasks_module/interfaces/task_suggestion_engine';

export {TaskProviderRegistryService} from './tasks_module/task_provider_registry.service';

export {CyberUiTasksModule} from './tasks_module/module';
