import { Component, Input} from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-log-reg-screen',
  templateUrl: './log-reg-screen.component.html',
  styleUrls: ['./log-reg-screen.component.css']
})

export class LogRegScreenComponent {

  loginEmail: string;
  loginPassword: string;
  username: string;

  constructor(public af: AngularFireAuth, private router: Router) {
  }

  loginUser(loginemail:HTMLInputElement, loginpassword:HTMLInputElement){
      this.loginEmail = loginemail.value;
      this.loginPassword = loginpassword.value;
      this.af
      .auth
      .signInWithEmailAndPassword(this.loginEmail, this.loginPassword)
      .then((value) => {
        this.username = this.loginEmail.substring(0,this.loginEmail.lastIndexOf("@"));
        console.log('Success!', value);
        this.router.navigateByUrl('/user');
      }).catch(err => {
        console.log('Something wrong:',err.message);
      });
  }


   

}
