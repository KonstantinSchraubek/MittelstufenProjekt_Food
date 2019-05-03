import {Injectable} from '@angular/core';
import {Encrypt} from '../models/encrypt';
import {FormGroup} from '@angular/forms';
import {Socket} from 'ngx-socket-io';
import {Observable} from 'rxjs';
import {first} from 'rxjs/operators';
import {CookieService} from 'ngx-cookie-service';
import {Rezept} from '../models/rezept';

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {

  constructor(private socket: Socket, private cookieService: CookieService) {
  }

  async getToken() {
    return (await this.cookieService.get('User'));
  }

  // adds a User to the Database
  async addUser(email: string, password: string, username: string, userForm: FormGroup) {
    const encrypt = new Encrypt(password);
    encrypt.set();

    this.socket.emit('addUser', {email: email, username: username, password: encrypt.encrypted, KeyID: encrypt.num});

    const response = await this.onMessage();

    if (response === 'USERNAME_TAKEN') {
      return response;
    } else if (response === 'EMAIL_TAKEN') {
      return response;
    } else {
      return true;
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
    this.socket.emit('getLoggedInUser', {token: await this.getToken()});
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

  // resets the token of a specific user
  async disconnectUser() {
    this.socket.emit('disconnectUser', {token: await this.getToken()});
  }

  async changePassword(newPassword: string, oldPassword: string) {
    const user = await this.getLoggedInUser();
    if (user.Username !== 'USER_NOT_FOUND') {
      const passwordCheck = await this.authenticateUser(user.Username, oldPassword);
      if (passwordCheck !== false) {
        const encrypt = new Encrypt(newPassword);
        encrypt.set();
        this.socket.emit('updatePassword', {username: user.Username, password: encrypt.encrypted, KeyID: encrypt.num});
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
    const user = await this.getLoggedInUser();
    if (user.Username !== 'USER_NOT_FOUND') {
      const passwordCheck = await this.authenticateUser(user.Username, password);
      if (passwordCheck) {
        this.socket.emit('updateEmail', {username: user.Username, email: email});
        const response = await this.onMessage();
        if (response === 'EMAIL_ALREADY_TAKEN') {
          return false;
        } else {
          return true;
        }
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

  async checkFavorite(recipeID: string): Promise<string> {
    recipeID = recipeID.substr(51);
    this.socket.emit('checkFavorite', {token: await this.getToken(), ID: recipeID});
    return await this.onMessage();
  }

  async addToUserFavorits(rezeptID: string) {
    rezeptID = rezeptID.substr(51);
    this.socket.emit('addFavorite', {token: await this.getToken(), ID: rezeptID});
    console.log(await this.onMessage());
  }

  async removeFromUserFavorites(rezeptID: string) {
    rezeptID = rezeptID.substr(51);
    this.socket.emit('removeFavorite', {token: await this.getToken(), ID: rezeptID});
    console.log(await this.onMessage());
  }

}
