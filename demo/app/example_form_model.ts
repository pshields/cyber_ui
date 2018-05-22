import {BooleanField} from 'ui/forms_module/fields/boolean';
import {CommaSeparatedListField} from 'ui/forms_module/fields/comma_separated_list';
import {ValueInNumericRangeField} from 'ui/forms_module/fields/value_in_numeric_range';
import {TextField} from 'ui/forms_module/fields/text';
import {RATIONALE_FIELD} from 'ui/forms_module/fields/common/rationale';
import {FormFieldElement} from 'ui/forms_module/form_field_element.enum';
import {ChoiceField, Option} from 'ui/forms_module/fields/choice';


export class DemoAppExampleFormModel {

  // Field list for this model
  static readonly fields = [
    // Example of using TextField
    new TextField({
      label: 'Some text field label',
      propertyName: 'text',
      autofocus: true,
    }),
    new BooleanField({
      label: 'Say hi?',
      propertyName: 'sayHi'
    }),
    new BooleanField({
      label: 'Example of a slide toggle',
      propertyName: 'slideToggleExample',
      element: FormFieldElement.MAT_SLIDE_TOGGLE,
    }),
    // Example of using CommaSeparatedListField
    new CommaSeparatedListField({
      label: 'Tags',
      propertyName: 'tags',
    }),
    new ValueInNumericRangeField({
      label: `What's your favorite number?`,
      propertyName: 'favoriteNumber',
      minValue: 0,
      maxValue: 10,
      step: 0.1,
    }),
    new ChoiceField({
      label: 'Favorite letter of the alphabet?',
      propertyName: 'favoriteLetter',
      options: [
        new Option('A', 'a'),
        new Option('B', 'b'),
        new Option('C', 'c'),
        new Option('D', 'd')
      ]
    }),
    // Examples of reusable / common fields
    RATIONALE_FIELD,
  ];

  // Properties and their initial values
  text = `Hi! I'm a text field.`;
  rationale = 'This is an example rationale.';
  tags = ['tag 1', 'tag 2'];
  slideToggleExample = true;
}
