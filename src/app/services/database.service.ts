import { Injectable } from '@angular/core';
import { Encrypt } from '../models/encrypt';
import { Http } from '@angular/http';
import { Router } from '@angular/router';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {

  constructor(private http: Http, private router: Router) {

  }

  updatePasswordOfUser(username: string, password: string) {
    let encrypt = new Encrypt(password);
    encrypt.set();
    this.http.put('http://localhost:3000/benutzer', {
      username: username,
      password: encrypt.encrypted,
      KeyID: encrypt.num
    }).subscribe(data => {
      res => {
        //logik um Nutzer über erfolgreichen Passwort wechsel zu berichten
      }
      err => {
        //logik um Nutzer über fehlgeschlagenen Passwort wechsel zu berichten
      }
    });
  }

  updateEmailOfUser(username: string, email: string) {
    this.http.put('http://localhost:3000/benutzer', {
      username: username,
      email: email
    }).subscribe(data => {
      res => {
        //logik um Nutzer über erfolgreichen email wechsel zu berichten
      }
      err => {
        //logik um Nutzer über fehlgeschlagenen Passwort wechsel zu berichten
      }
    });
  }

  addUser(email: string, password: string, confirmedPassword: string, username: string, userForm: FormGroup) {
    if (userForm.dirty && userForm.valid) {
      let encrypt = new Encrypt(password);
      encrypt.set();
      const req = this.http.post('http://localhost:3000/benutzer', {
        email: email,
        username: username,
        password: encrypt.encrypted,
        KeyID: encrypt.num
      }).subscribe(
        res => {
          this.router.navigateByUrl('/successfulRegistration');
          return;
        },
        err => {
          alert("username or email is already taken!");
          return;
        }
      );
    }
  }

  authenticateUser(username: string, password: string) {
    let encrypt = new Encrypt(password);
    encrypt.set();
    const req = this.http.post('http://localhost:3000/benutzer', {
      username: "Frosor",
      password: "9d7/5dIvetoci1Kk8soVjQ=="
    }).subscribe(
      res => {
        //Logik wenn Benutzer erflogreich angemeldet wurde     
        this.router.navigateByUrl('/successfulRegistration');
        return;
      },
      err => {
        //Logik wenn Nutzer nicht angemeldet werden konnte
        alert("There is no User like that registered.\nPlease register first or check your data.");
        return;
      }
    );
  }
}
