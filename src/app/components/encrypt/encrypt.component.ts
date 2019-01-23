import { Component } from '@angular/core';
import * as CryptoJS from 'crypto-js';

@Component({
  selector: 'app-root',
  templateUrl: './encrypt.component.html',
  styleUrls: ['./encrypt.component.css']
})

export class encrypt {

  password: string;
  key: string;
  encrypted;
  decrypted;

  constructor() {
    this.key = 'alpha';
  }

  set(keys, value) {
    this.key = CryptoJS.enc.Utf8.parse(keys);
    var iv = CryptoJS.enc.Utf8.parse(keys);
    this.encrypted = CryptoJS.AES.encrypt(CryptoJS.enc.Utf8.parse(value.toString()), this.key,
      {
        keySize: 128 / 8,
        iv: iv,
        mode: CryptoJS.mode.CBC,
        padding: CryptoJS.pad.Pkcs7
      });

    return this.encrypted.toString();
  }


  get(keys, value) {
    this.key = CryptoJS.enc.Utf8.parse(keys);
    var iv = CryptoJS.enc.Utf8.parse(keys);
    this.decrypted = CryptoJS.AES.decrypt(value, this.key, {
      keySize: 128 / 8,
      iv: iv,
      mode: CryptoJS.mode.CBC,
      padding: CryptoJS.pad.Pkcs7
    });

    return this.decrypted.toString(CryptoJS.enc.Utf8);
  }
}
