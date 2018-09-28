import { Component, OnInit, Injectable, Pipe } from '@angular/core';
import { LogRegScreenComponent } from '../loginReg/log-reg-screen/log-reg-screen.component';
import { AngularFireStorage, AngularFireStorageReference, AngularFireUploadTask } from 'angularfire2/storage';
import { Observable } from 'rxjs/observable';
import { AngularFireAuth } from 'angularfire2/auth';
import { Router } from '@angular/router';
import { auth } from 'firebase';
import * as firebase from 'firebase/app';
import { elementStyleProp } from '@angular/core/src/render3/instructions';

@Component({
  selector: 'app-upload-screen',
  templateUrl: './upload-screen.component.html',
  styleUrls: ['./upload-screen.component.css']
})

export class UploadScreenComponent {

  ref: AngularFireStorageReference;
  task: AngularFireUploadTask;
  uploadEvent: any;
  percentage: any;
  snapshot: any;

  constructor(public af: AngularFireStorage, private aut: AngularFireAuth, private router: Router) {}

  onFileSelected(event){
    this.uploadEvent = event;
    const id = Math.random().toString(36).substring(2);
    this.ref = this.af.ref('media/' + id);
    }

  onUpload(){
    this.task = this.ref.put(this.uploadEvent.target.files[0]);
    this.percentage = this.task.percentageChanges();
    this.snapshot = this.task.snapshotChanges();
  }

  // isActive(snapshot){
  //   return snapshot.state === 'running' && snapshot.bytesTransferred < snapshot.totalBytes
  // }

  logOut(){
    if(firebase.auth){
      this.aut
      .auth
      .signOut()
      .then((value) => {
        console.log('logout!', value);
        this.router.navigateByUrl('');
      }).catch(err => {
        console.log('Something wrong:',err.message);
      });
    }
    else{
      console.log("error logout");
    }
    
  }

}
