import {FormFieldConfig} from './form_field_config';


// Utility function to create a FormFieldConfig with defaults for all required options
function createConfig(options: any): FormFieldConfig {
  if (options.label === undefined) {
    options.label = 'Bogus label';
  }
  if (options.propertyName === undefined) {
    options.propertyName = 'Bogus property name';
  }
  return new FormFieldConfig(options);
}


// TODO Test this out on a concrete subclass
describe('FormFieldConfig', () => {
  let config: FormFieldConfig;

  it('initializes the label', () => {
    const testLabel = 'Foo';
    config = createConfig({label: testLabel});
    expect(config.label).toEqual(testLabel);
  });

  it('initializes the `required` config from the options', () => {
    // Test that the `required` option is conveyed when it is present
    config = createConfig({required: true});
    expect(config.required).toBe(true);
    config = createConfig({required: false});
    expect(config.required).toBe(false);
    // The default value for `required` should be false
    config = createConfig({});
    expect(config.required).toBe(false);
  });

  it('initializes the `autofocus` config from the options', () => {
    // Test that the `autofocus` option is conveyed when it is present
    config = createConfig({autofocus: true});
    expect(config.autofocus).toBe(true);
    config = createConfig({autofocus: false});
    expect(config.autofocus).toBe(false);
    // The default value for `autofocus` should be false
    config = createConfig({});
    expect(config.autofocus).toBe(false);
  });

  it('initializes the `helpText` param', () => {
    const testHelpText = 'Helpful explanation';
    config = createConfig({helpText: testHelpText});
    expect(config.helpText).toBe(testHelpText);
    config = createConfig({});
    expect(config.helpText).toBeUndefined();
  });

  describe('#override', () => {
    // TODO
  });
});
