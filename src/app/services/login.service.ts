import {Injectable} from '@angular/core';
import {CookieService} from 'ngx-cookie-service';
import {DatabaseService} from './database.service';
import {of} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  public loggedIn: boolean = false;

  constructor(private cookieservice: CookieService, private databaseservice: DatabaseService) {
  }


  checkUser(username: string, passwort: string) {
    const res = this.databaseservice.authenticateUser(username, passwort);

    res.then(value => {
      if (value !== false) {
        this.createCookie(value);
      }
    });
  }

  createCookie(res: string) {
    this.cookieservice.set('User', res);
    this.loggedIn = true;
  }

  logoutUser() {
    // this.databaseservice.logout();
    this.cookieservice.delete('User');
  }
}
