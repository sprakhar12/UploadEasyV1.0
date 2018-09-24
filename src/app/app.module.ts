import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LogRegScreenComponent } from './loginReg/log-reg-screen/log-reg-screen.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    LogRegScreenComponent,
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
