import {NgModule} from '@angular/core';

import {CyberUiFirestoreBackend} from './backend';
import {CyberUiFirestorePathService} from './path_service';
import {CyberUiFirestoreBackedModelService} from './service';


@NgModule({
  providers: [
    CyberUiFirestoreBackend,
    CyberUiFirestoreBackedModelService,
    CyberUiFirestorePathService,
  ],
})
export class CyberUiFirestoreBackendModule {}
