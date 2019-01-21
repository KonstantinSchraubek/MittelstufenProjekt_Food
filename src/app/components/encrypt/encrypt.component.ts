import { Component } from '@angular/core';
import * as CryptoJS from 'crypto-js';

@Component({
  selector: 'app-root',
  templateUrl: './encrypt.component.html',
  styleUrls: ['./encrypt.component.css']
})
export class EncryptComponent {

  password: string;
  encrypted: string;
  decrypted: string;

  constructor(password: string) {
    this.password = password;
  }


  encryptPassword() {
    this.encrypted = CryptoJS.AES.encrypt(this.password.trim()).toString();
  }

  decryptPassword() {
    this.decrypted = CryptoJS.AES.decrypt(this.password.trim()).toString(CryptoJS.enc.Utf8);
  }



}
