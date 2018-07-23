import {BooleanField} from 'lib/form/fields/boolean';
import {CommaSeparatedListField} from 'lib/form/fields/comma_separated_list';
import {ValueInNumericRangeField} from 'lib/form/fields/value_in_numeric_range';
import {TextField} from 'lib/form/fields/text';
import {FormFieldElement} from 'lib/form/form_field_element.enum';
import {ChoiceField, Option} from 'lib/form/fields/choice';


export class DemoAppExampleFormModel {

  // Fields for this model
  static readonly fields = [
    new TextField({
      label: 'Name',
      propertyName: 'name',
      autofocus: true,
    }),
    new BooleanField({
      label: 'Say hi?',
      propertyName: 'sayHi'
    }),
    new BooleanField({
      label: 'Active?',
      propertyName: 'slideToggleExample',
      element: FormFieldElement.MAT_SLIDE_TOGGLE,
    }),
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
  ];

  // Properties' initial values
  // Note that most fields do not need to be initialized - doing so is optional
  tags = ['tag 1', 'tag 2'];
  slideToggleExample = true;
}
