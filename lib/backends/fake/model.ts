import {CyberUiSavableModel} from '../interfaces/model';


// A non-persistent fake model to use in tests and demos
export class FakeModel implements CyberUiSavableModel {
  save() {
    return Promise.resolve();
  }
}