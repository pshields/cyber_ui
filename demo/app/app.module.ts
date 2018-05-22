import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {NgModule} from '@angular/core';

import {CyberUiFormsModule} from 'ui/forms_module/module';

import {AppComponent} from './app.component';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CyberUiFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
