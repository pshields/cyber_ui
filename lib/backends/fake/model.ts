import {CyberUiSavableModel} from '../interfaces/savable_model';
import {CyberUiSerializableModel} from '../interfaces/serializable_model';


// A non-persistent fake model to use in tests and demos
export class FakeModel implements CyberUiSavableModel, CyberUiSerializableModel {

  protected data = {};  // the data object in which the model's data will be stored

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

  // Returns a copy so as to avoid accidental mutation further down the line
  toJson() {
    return JSON.parse(JSON.stringify(this.data));
  }
}