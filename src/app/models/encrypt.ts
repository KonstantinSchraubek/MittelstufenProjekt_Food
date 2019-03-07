import * as CryptoJS from 'crypto-js';

export class Encrypt {

    password: string;
    keylist: string[] = ["123456$#@$^@1ERF", "GHIFUT4783%&$§4L", "ABCDEFG%&/(ÄÜ123",
        "WERTESINDDOOFJAU", "POL9876ETP136/&%", "WÖLK()/&BFRE1234",
        "K&I(M&ER=WPLÄÖLK", "ÜPOI%&/(MNBV0987", "TZUR_:;?HRTZ7685",
        "HRTZ/$?=1089PÖHR", "AÄHG(/!:LÖÄA0769", "URTLO=)(7695LAJD",
        "_:;!BERGUNDTAL/&", "TZUSCHUK=)(/%123", "ÄQURT%$)(12098CL",
        "QWERTZ_:;MN09182", "ÜPTRE_>/&%$10653", "10978QWERPOYLDES",
        "TREWQPOER1867)%$", "#+?=(TROECLUM&$%"];
    num: number;
    encrypted;
    decrypted;

    constructor(pass?: string) {
        this.password = pass;
    }

    setpassword(pass?: string) {
        this.password = pass;
    }

    set() {
        this.num = Math.floor(Math.random() * 19);
        let key = CryptoJS.enc.Utf8.parse(this.keylist[this.num]);
        //let key = CryptoJS.enc.Utf8.parse(keys)
        var iv = CryptoJS.enc.Utf8.parse(key);
        this.encrypted = CryptoJS.AES.encrypt(CryptoJS.enc.Utf8.parse(this.password.toString()), key,
            {
                keySize: 128 / 8,
                iv: iv,
                mode: CryptoJS.mode.CBC,
                padding: CryptoJS.pad.Pkcs7
            });
        this.encrypted = this.encrypted.toString();
    }


    get(number) {
        let key = CryptoJS.enc.Utf8.parse(this.keylist[number]);
        var iv = CryptoJS.enc.Utf8.parse(key);
        this.decrypted = CryptoJS.AES.decrypt(this.encrypted, key, {
            keySize: 128 / 8,
            iv: iv,
            mode: CryptoJS.mode.CBC,
            padding: CryptoJS.pad.Pkcs7
        });
        this.decrypted = this.decrypted.toString(CryptoJS.enc.Utf8);
    }
}
