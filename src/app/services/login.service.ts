import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import {DatabaseService} from './database.service';
import {of} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  public loggedIn: boolean = true;

  constructor(private cookieservice: CookieService, private databaseservice: DatabaseService) { }


  checkUser(username: string, passwort: string) {
   // const res = this.databaseservice.authenticateUser(username, passwort);
    const res = '234123';

      this.createCookie(res);

  }

  createCookie(res: string) {
    this.loggedIn = true;
    this.cookieservice.set('User', res);
  }
}
