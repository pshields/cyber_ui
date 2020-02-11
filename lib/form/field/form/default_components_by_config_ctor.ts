import {TextFieldConfig} from '../text/field';
import {CyberUiTextFieldComponent} from '../text/component';
import {BooleanFieldConfig} from '../boolean/field';
import {CyberUiBooleanFieldComponent} from '../boolean/component';
import {ChoiceFieldConfig} from '../choice/field';
import {CyberUiChoiceFieldComponent} from '../choice/component';
import {ValueInNumericRangeFieldConfig} from '../value_in_numeric_range/field';
import {CyberUiValueInNumericRangeFieldComponent} from '../value_in_numeric_range/component';
import {DiscreteProbabilityDistributionFieldConfig} from '../discrete_probability_distribution/field';
import {CyberUiDiscreteProbabilityDistributionFieldComponent} from '../discrete_probability_distribution/component';
import {FieldListListFieldConfig} from '../field_list_list/field';
import {CyberUiFieldListListFieldComponent} from '../field_list_list/component';


export const CYBER_UI_DEFAULT_FORM_FIELD_COMPONENTS_BY_CONFIG_CTOR = [
  {
    configCtor: TextFieldConfig,
    component: CyberUiTextFieldComponent,
  },
  {
    configCtor: BooleanFieldConfig,
    component: CyberUiBooleanFieldComponent,
  },
  {
    configCtor: ChoiceFieldConfig,
    component: CyberUiChoiceFieldComponent,
  },
  {
    configCtor: FieldListListFieldConfig,
    component: CyberUiFieldListListFieldComponent,
  },
  {
    configCtor: DiscreteProbabilityDistributionFieldConfig,
    component: CyberUiDiscreteProbabilityDistributionFieldComponent,
  },
  {
    configCtor: ValueInNumericRangeFieldConfig,
    component: CyberUiValueInNumericRangeFieldComponent,
  },
];
