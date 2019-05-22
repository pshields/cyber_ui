import {NgModule} from '@angular/core';

import {CYBER_UI_MODEL_SERVICE} from '../interfaces/model_service';

import {FakeModelService} from './model.service';


@NgModule({
  providers: [
    {provide: CYBER_UI_MODEL_SERVICE, useClass: FakeModelService},
  ]
})
export class CyberUiFakeBackendModule {
}