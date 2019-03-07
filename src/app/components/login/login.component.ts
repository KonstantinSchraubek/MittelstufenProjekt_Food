import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor() { }

  private username: string;
  private passwort: string;

  ngOnInit() {
  }



  logInUser(username: string, passwort: string): void {
    this.passwort = passwort;
    // this.loggedIn = true;
  }
}


//https://www.youtube.com/watch?v=FKPfiQQz5hY
//https://www.npmjs.com/package/ngx-cookie-service

