import {Injectable} from '@angular/core';
import {CookieService} from 'ngx-cookie-service';
import {DatabaseService} from './database.service';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  public loggedIn = false;
  public loginFailed = false;

  constructor(private cookieservice: CookieService, private databaseservice: DatabaseService) {
    if (this.cookieservice.get('User')) {
      this.loggedIn = true;
    }
  }

  async checkUser(username: string, passwort: string) {
    const res = await this.databaseservice.authenticateUser(username, passwort);
    if (res !== false) {
      this.createCookie(res);
      this.loginFailed = false;
    } else {
      this.loginFailed = true;
    }
  }

  createCookie(res: string) {
    this.cookieservice.set('User', res);
    this.loggedIn = true;
  }

  logoutUser() {
    this.databaseservice.disconnectUser();
    this.cookieservice.delete('User');
    this.loggedIn = false;
  }
}
