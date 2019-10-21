import {FakeModel} from './model';


describe('FakeModel', () => {

  describe('toJson()', () => {

    it("returns a deep copy of the model's state", () => {
      const model = new FakeModel();
      model.setProperty('foo', 'bar');
      const json1 = model.toJson();
      expect(json1['foo']).toBe('bar');
      json1['foo'] = 'baz';
      const json2 = model.toJson();
      // If the first .toJson() produceda  deep copy, the model state should still be {foo: 'bar'}
      expect(json2['foo']).toBe('bar');
    });

  });

});
