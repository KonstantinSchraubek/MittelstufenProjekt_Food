import { OnInit } from '@angular/core';
import * as CryptoJS from 'crypto-js';

export class Encrypt implements OnInit {

    password: string;
    encrypted;
    decrypted;

    constructor(pass?: string) {
        this.password = pass;
    }

    setpassword(pass?: string) {
        this.password = pass;
    }

    // this.encrypted = CryptoJS.AES.encrypt(CryptoJS.enc.Utf8.parse(value.toString()), key,

    set(keys) {
        let key = CryptoJS.enc.Utf8.parse(keys)
        var iv = CryptoJS.enc.Utf8.parse(keys);
        this.encrypted = CryptoJS.AES.encrypt(CryptoJS.enc.Utf8.parse(this.password.toString()), key,
            {
                keySize: 128 / 8,
                iv: iv,
                mode: CryptoJS.mode.CBC,
                padding: CryptoJS.pad.Pkcs7
            });
        this.encrypted = this.encrypted.toString();
        //return this.encrypted.toString();
    }


    get(keys) {
        let key = CryptoJS.enc.Utf8.parse(keys);
        var iv = CryptoJS.enc.Utf8.parse(keys);
        this.decrypted = CryptoJS.AES.decrypt(this.encrypted, key, {
            keySize: 128 / 8,
            iv: iv,
            mode: CryptoJS.mode.CBC,
            padding: CryptoJS.pad.Pkcs7
        });
        this.decrypted = this.decrypted.toString(CryptoJS.enc.Utf8);
        //return this.decrypted;

    }

    ngOnInit() {

    }
}
