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
    encrypt.set();
    this.http.put('http://10.102.181.126:3000/benutzer' ,{
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
    this.http.put('http://10.102.181.126:3000/benutzer' ,{
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
        encrypt.set();
        const req = this.http.post('http://10.102.181.126:3000/benutzer', {
          email: email,
          username: username,
          password: encrypt.encrypted,
          KeyID: encrypt.num
        }).subscribe(
            res => {
              this.router.navigateByUrl('/successfulRegistration');
              return true;
            },
            err => {
              alert('Username or Email is already taken.')
              return false;
            }
          );
      }
      else {
        alert("Passwords need to be the same!")
        return false;
      }
    }
  }
}
