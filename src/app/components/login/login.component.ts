import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import {DatabaseService} from '../../services/database.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private cookieSerivce: CookieService, private databaseservive: DatabaseService ) { }

  private username: string;
  private passwort: string;

  ngOnInit() {
    this.cookieSerivce.set("ID", "token");
  }



  logInUser(username: string, passwort: string): void {
    
  }
}


//https://www.youtube.com/watch?v=FKPfiQQz5hY
//https://www.npmjs.com/package/ngx-cookie-service

