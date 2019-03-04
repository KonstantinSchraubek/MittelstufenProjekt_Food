import { Injectable } from '@angular/core';
import { Encrypt } from '../models/encrypt';
import { Http } from '@angular/http';
import { Router } from '@angular/router';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {

  abort: boolean;

  constructor(private http: Http, private router: Router) {

  }

  // this.http.get('http://localhost:3000/benutzer').subscribe(data => {
  //   console.log(data);
  // });

  updatePasswordOfUser(username: string, password: string) {
    let encrypt = new Encrypt(password);
    encrypt.set('test12345');
    this.http.put('http://localhost:3000/benutzer' ,{
      username: username,
      password: encrypt.encrypted
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
    this.http.put('http://localhost:3000/benutzer' ,{
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
    this.abort = false;
    if (userForm.dirty && userForm.valid) {
      if (password == confirmedPassword) {
        let encrypt = new Encrypt(password);
        encrypt.set('test12345');
        const req = this.http.post('http://localhost:3000/benutzer', {
          email: email,
          username: username,
          password: encrypt.encrypted
        }).subscribe(
            res => {
              this.router.navigateByUrl('/successfulRegistration');
            },
            err => {
              alert('Username or Email is already taken.')
            }
          );
      }
      else {
        alert("Passwords need to be the same!")
        return;
      }
    }
  }
}
