import {Injectable} from '@angular/core';

import {CyberUiModelService} from '../interfaces/model_service';

import {FakeModel} from './model';


@Injectable()
export class FakeModelService implements CyberUiModelService {

  getNewEmptyModel() {
    return new FakeModel();
  }

}
