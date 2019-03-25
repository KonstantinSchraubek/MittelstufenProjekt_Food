import {Injectable} from '@angular/core';
import {Encrypt} from '../models/encrypt';
import {Router} from '@angular/router';
import {FormGroup} from '@angular/forms';
import {Socket} from 'ngx-socket-io';
import {Observable} from 'rxjs';
import {first} from 'rxjs/operators';
import {CookieService} from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {
  token: string;

  constructor(private router: Router, private socket: Socket, private cookieService: CookieService) {
    this.token = this.cookieService.get('User');
  }

  // adds a User to the Database
  async addUser(email: string, password: string, username: string, userForm: FormGroup) {
    const encrypt = new Encrypt(password);
    encrypt.set();

    this.socket.emit('addUser', {email: email, username: username, password: encrypt.encrypted, KeyID: encrypt.num});

    const response = await this.onMessage();

    if (response === 'USERNAME_TAKEN') {
      alert(response);
    } else if (response === 'EMAIL_TAKEN') {
      alert(response);
    } else {
      this.router.navigateByUrl('/successfulRegistration');
    }
  }

  // gets every emit that has the tag 'message' and returns the data as promise
  async onMessage(): Promise<any> {
    return await new Observable<any>(observer => {
      this.socket.on('message', (data: any) => observer.next(data));
    }).pipe(first()).toPromise();
  }

  // gets the KeyID of the corresponding user based on the username
  async getKeyID(username: string) {
    this.socket.emit('getKeyID', {username: username});
    return (await this.onMessage());
  }

  async getLoggedInUser() {
    this.socket.emit('getLoggedInUser', {token: this.token});
    return (await this.onMessage());
  }

  // gets the generated token of the corresponding user based on the username and hashed password
  async authenticateUser(username: string, password: string) {

    const response = await this.getKeyID(username);
    if (response === 'USER_HAS_NO_KEY') {
      return false;
    } else {
      const encrypt = new Encrypt(password);
      encrypt.check(response);
      this.socket.emit('authenticateUser', {username: username, password: encrypt.encrypted});

      const authUserResponse = await this.onMessage();

      if (authUserResponse === 'USER_DOES_NOT_EXIST') {
        return false;
      } else {
        // returns the token
        return authUserResponse;
      }
    }

  }

  async checkPasswords(password: string, username: string) {
    const e = new Encrypt(password);
    e.check(this.getKeyID(username));
    this.socket.emit('checkPasswords', {password: password});
    return (await this.onMessage());
  }

  // resets the token of a specific user
  async disconnectUser() {
    this.socket.emit('disconnectUser', {token: this.token});
  }

  async changePassword(newPassword: string, oldPassword: string) {
    const username = await this.getLoggedInUser();
    if (username !== 'USER_NOT_FOUND') {
      const passwordCheck = await this.checkPasswords(oldPassword, username);
      if (passwordCheck !== 'USER_NOT_FOUND') {
        const encrypt = new Encrypt(newPassword);
        encrypt.set();
        this.socket.emit('updatePassword', {username: username, password: encrypt.encrypted, KeyID: encrypt.num});
        return true;
      } else {
        // logik wenn altes passwort falsch war
        return false;
      }
    } else {
      // logik wenn kein nutzer mit diesem token gefunden wurde
      return false;
    }
  }

  async changeEmail(email: string, password: string) {
    const username = await this.getLoggedInUser();
    if (username !== 'USER_NOT_FOUND') {
      const passwordCheck = await this.checkPasswords(password, username);
      if (passwordCheck !== 'USER_NOT_FOUND') {
        this.socket.emit('updateEmail', {username: username, email: email});
        return true;
      } else {
        // logik wenn altes passwort falsch war
        return false;
      }
    } else {
      // logik wenn kein nutzer mit diesem token gefunden wurde
      return false;
    }
  }

  async getRezepte(ingredients: string) {
    this.socket.emit('getRezepte', {ingredients: ingredients});
    return (await this.onMessage());
  }

}
