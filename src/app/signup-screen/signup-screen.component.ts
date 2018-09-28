import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { Router } from '@angular/router';
import { AppRoutingModule } from '../app-routing.module';
import { Observable } from 'rxjs';
import { FirebaseApp } from 'angularfire2';

@Component({
  selector: 'app-signup-screen',
  templateUrl: './signup-screen.component.html',
  styleUrls: ['./signup-screen.component.css']
})

export class SignupScreenComponent {

  userEmail: any;
  password: any;
  user: Observable<firebase.User>;

  constructor(private af: AngularFireAuth, private router:Router) {
    this.user = af.authState;
   }

  registerUser(useremail:HTMLInputElement, pwd:HTMLInputElement){
      this.userEmail = useremail.value;
      this.password = pwd.value;
      this.af
      .auth
      .createUserWithEmailAndPassword(this.userEmail, this.password)
      .then((value) => {
        console.log('Success!', value);
        this.router.navigateByUrl('/login');
      }).catch(err => {
        console.log('Something wrong:',err.message);
      });
    }

}
