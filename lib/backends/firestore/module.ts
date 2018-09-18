import {NgModule} from '@angular/core';

import {CyberUiFirestoreBackend} from './backend';
import {CyberUiFirestoreBackedModelService} from './service';


@NgModule({
  providers: [
    CyberUiFirestoreBackend,
    CyberUiFirestoreBackedModelService,
  ],
})
export class CyberUiFirestoreBackendModule {}
