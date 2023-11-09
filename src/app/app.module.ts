import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SdecCommonLibModule } from 'sdec-common-lib';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SdecCommonLibModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
