import {Observable, ReplaySubject} from 'rxjs';
import {delay} from 'rxjs/operators';

import {CyberUiSavableModel} from '../interfaces/savable_model';
import {CyberUiSerializableModel} from '../interfaces/serializable_model';


// A non-persistent fake model to use in tests and demos
export class FakeModel implements CyberUiSavableModel, CyberUiSerializableModel {

  protected data = {};  // the data object in which the model's data will be stored

  // A stream of the model's data as JSON; initialized only when first needed
  _stream: ReplaySubject<{}>;
  get stream(): Observable<{}> {
    if (this._stream === undefined) {
      this._stream = new ReplaySubject<{}>(1);
      // Send an initial state to consumers
      this._stream.next(this.toJson());
    }
    return this._stream;
  }

  // An asynchronous version of the model's JSON data stream
  // Since it's asynchronous, it causes a full run of Angular change detection on each change
  // This means that things like field initialization don't cause ExpressionChangedAfterItHasBeenCheckedError errors
  _asyncStream: Observable<{}>;
  get asyncStream(): Observable<{}> {
    if (this._asyncStream === undefined) {
      this._asyncStream = this.stream.pipe(delay(0));
    }
    return this._asyncStream;
  }

  // TODO Find a way to assert / enforce that the returned property does not or cannot
  // end up mutating the underlying model data
  getProperty(propertyName: string) {
    return this.data[propertyName];
  }

  setProperty(propertyName: string, value: {}) {
    this.data[propertyName] = value;
    // Emit the latest model data to the data stream, if it's been initialized
    if (this._stream !== undefined) {
      this._stream.next(this.toJson());
    }
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