import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-log-reg-screen',
  templateUrl: './log-reg-screen.component.html',
  styleUrls: ['./log-reg-screen.component.css']
})

export class LogRegScreenComponent implements OnInit {

  showSelected: boolean;

  constructor() {
    this.showSelected = false;
   }

  ngOnInit() {
  }

  showLogin(){
    this.showSelected = false;
   }

   showRegister(){
    this.showSelected = true;
   }

}
