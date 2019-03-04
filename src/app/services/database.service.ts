import { Injectable } from '@angular/core';
import {Encrypt} from '../models/encrypt';
import {Http} from '@angular/http';

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {

  abort: boolean;

  constructor(private http: Http) {
    this.abort = false;
  }

  // this.http.get('http://localhost:3000/benutzer').subscribe(data => {
  //   console.log(data);
  // });

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
            // if(res.toString() == 'error, Username or email already exists.') {
            //   alert("User credentials already exist.");
            // }
          },
          err => {
            this.abort = true;
            alert('Username or Email is already taken.')
            console.log("Error occured");
          }
        );
    }
    else{
      alert("Passwords need to be the same!")
    }

    if(!this.abort) {

    }



  }
}
