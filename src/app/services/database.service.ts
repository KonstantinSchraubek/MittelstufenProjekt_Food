import { Injectable } from '@angular/core';
import {Encrypt} from '../models/encrypt';
import {Http} from '@angular/http';

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {

  constructor(private http: Http) { }

  addUser(  email: string,
                    password: string,
                    confirmedPassword: string,
                    username: string) {

    if(password == confirmedPassword) {
      let encrypt = new Encrypt(password);
      encrypt.set('test12345');


      const req = this.http.post('http://localhost:3000/benutzer', {
        email: email,
        username: username,
        password: encrypt.encrypted
      })
        .subscribe(
          res => {
            console.log(res);
          },
          err => {
            console.log("Error occured");
          }
        );
    }
    else{
      alert("Passwords need to be the same!")
    }



  }
}
