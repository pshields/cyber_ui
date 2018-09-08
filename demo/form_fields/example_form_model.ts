import {BooleanField} from 'lib/public_api';
import {ChoiceField, Option} from 'lib/public_api';
import {CommaSeparatedListField} from 'lib/public_api';
import {DiscreteProbabilityDistributionField} from 'lib/public_api';
import {FormFieldElement} from 'lib/public_api';
import {TextField} from 'lib/public_api';
import {ValueInNumericRangeField} from 'lib/public_api';


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
    new DiscreteProbabilityDistributionField({
      label: 'Which S&P 500 company will become the first to achieve a market capitalization of ≥ $2T?',
      propertyName: 'sp500MarketCapPrediction',
      outcomePresets: [
        {label: 'Alphabet'},
        {label: 'Amazon'},
        {label: 'Apple'},
      ]
    }),
  ];

  // Properties' initial values
  // Note that most fields do not need to be initialized - doing so is optional
  tags = ['tag 1', 'tag 2'];
  slideToggleExample = true;
}
