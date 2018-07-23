# cyber_ui form design doc and usage guide

Status: very early stage; breaking changes likely; still not sure how opinionated versus flexible the finished product should be.

## Design overview

Design goals:

* Allow consumers to specify form fields programatically
* Generate the form UI from the specification, so consumers don't have to write any template code
* Conform to the general Material Design aesthetic

Overall approach:

* Assume a data model where, for any given form, all field values are stored as properties of a single object (the "model")
* Allow consumers to specify a list of fields which constitute a form
* Each field takes a required `propertyName` option stating which property the field's value should be stored at on the model

## Usage overview

This module currently supports the following fields:

* TextField
* BooleanField
* ChoiceField
* CommaSeparatedListField
* ValueInNumericRangeField

To use, define a list of list of fields and provide a data model object.

```typescript
const model = {};

const fields = [
  new TextField({
    label: 'Foo label',
    propertyName: 'foo'
  }),
  new ValueInNumericRangeField({
    label: 'My favorite number',
    propertyName: 'favoriteNumber',
    minValue: 0,
    maxValue: 10
  }),
  ...
];
```

Then, in the template, pass the model and the field list to the `cyber-ui-form-fields` component.

```html
<cyber-ui-form-fields [model]="model" [fields]="fields"></cyber-ui-form-fields>
```