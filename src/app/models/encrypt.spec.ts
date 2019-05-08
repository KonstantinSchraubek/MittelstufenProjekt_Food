import * as CryptoJS from 'crypto-js';
import {Encrypt} from './Encrypt';

describe('Encrypt', () => {
  it('should create an instance', () => {
    expect(new Encrypt('password123456')).toBeTruthy();
  });


  it('should create', () => {
    const crypt = new Encrypt('password123456');
    expect(crypt).toBeTruthy();
  });

  it('should Encrypt', () => {
    const crypt = new Encrypt('password123456');
    crypt.set();
    console.log('Encrypted: ' + crypt.encrypted.toString());
    expect(crypt.encrypted).toBeTruthy();
  });
});
