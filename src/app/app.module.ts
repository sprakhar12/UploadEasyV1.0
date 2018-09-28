import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// import { NgCircleProgressModule } from 'ng-circle-progress';

import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
// import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireStorageModule } from 'angularfire2/storage';

import { AppComponent } from './app.component';
import { LogRegScreenComponent } from './loginReg/log-reg-screen/log-reg-screen.component';
import { AppRoutingModule } from './app-routing.module';
import { environment } from '../environments/environment';
import { UploadScreenComponent } from './upload-screen/upload-screen.component';
import { SignupScreenComponent } from './signup-screen/signup-screen.component';

@NgModule({
  declarations: [
    LogRegScreenComponent,
    AppComponent,
    UploadScreenComponent,
    SignupScreenComponent
  ],
  imports: [
    BrowserModule,
    // NgCircleProgressModule.forRoot({
    //   // set defaults here
    //   radius: 60,
    //   outerStrokeWidth: 16,
    //   innerStrokeWidth: 8,
    //   outerStrokeColor: "#78C000",
    //   innerStrokeColor: "#C7E596",
    //   animation: true
    // }),
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebaseconfig),
    AngularFireAuthModule,
    AngularFireStorageModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
