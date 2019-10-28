import {Observable} from 'rxjs';


// Interface for serializable models
export interface CyberUiSerializableModel {

  // Returns an observable of the model's data as JSON
  stream?: Observable<{}>;

  // Returns an asynchronous observable of the model's data as JSON
  // (useful to get around Angular change detection errors)
  asyncStream?: Observable<{}>;

  // Returns a JSON representation of the model's data
  // TODO Consider deprecating this in favor of using only the observable stream
  toJson(): {};

}
