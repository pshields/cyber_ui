import {BooleanField} from 'lib/public_api';
import {ChoiceField, Option} from 'lib/public_api';
import {CommaSeparatedListField} from 'lib/public_api';
import {DiscreteProbabilityDistributionField} from 'lib/public_api';
import {FormField} from 'lib/public_api';
import {FieldListListField} from 'lib/public_api';
import {TextField} from 'lib/public_api';
import {ValueInNumericRangeField} from 'lib/public_api';

import {FakeModel} from 'lib/backends/fake/model';
import {CyberUiDemoExampleHelpDialogComponent} from './example_help_dialog.component';


export const DEMO_APP_EXAMPLE_FORM_MODEL_FIELDS: FormField[] = [
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
    element: 'mat-slide-toggle',
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
    ],
    helpDialog: CyberUiDemoExampleHelpDialogComponent,
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


// In order to recursively reference the field list from itself, we have
// to have a reference to the Array before constructing the recursive field
DEMO_APP_EXAMPLE_FORM_MODEL_FIELDS.push(
new FieldListListField({
  label: 'Child models (to demonstrate recursion)',
  propertyName: 'children',
  fields: DEMO_APP_EXAMPLE_FORM_MODEL_FIELDS,
  contentTypeLabel: 'CHILD MODEL',
}));


export class DemoAppExampleFormModel extends FakeModel {
  fields = DEMO_APP_EXAMPLE_FORM_MODEL_FIELDS;

  // Properties' initial values
  // Note that most fields do not need to be initialized - doing so is optional
  constructor() {
    super();
    this.data['tags'] =  ['tag 1', 'tag 2'];
    this.data['slideToggleExample'] = true;
  }
}
