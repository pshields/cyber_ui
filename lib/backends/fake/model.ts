import {CyberUiSavableModel} from '../interfaces/savable_model';


// A non-persistent fake model to use in tests and demos
export class FakeModel implements CyberUiSavableModel {

  data = {};  // the data object in which the model's data will be stored

  getProperty(propertyName: string) {
    return this.data[propertyName];
  }

  setProperty(propertyName: string, value: {}) {
    this.data[propertyName] = value;
  }

  isEmpty() {
    return Object.getOwnPropertyNames(this.data).length === 0;
  }

  save() {
    if (this.isEmpty()) {
      return Promise.reject('FakeModel refuses to be saved when it is empty')
    } else {
      return Promise.resolve();
    }
  }

  toJson() {
    return this.data;
  }
}