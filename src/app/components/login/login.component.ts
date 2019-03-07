import { Component, OnInit } from '@angular/core';
import {LoginService} from '../../services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private loginservice: LoginService ) { }


  ngOnInit() {
  }



  logInUser(username: string, passwort: string): void {
     this.loginservice.checkUser(username, passwort);
  }
}


// https://www.youtube.com/watch?v=FKPfiQQz5hY
// https://www.npmjs.com/package/ngx-cookie-service

