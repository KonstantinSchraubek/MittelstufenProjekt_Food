import * as CryptoJS from 'crypto-js';
import { Encrypt } from './Encrypt';

describe('Encrypt', () => {
  it('should create an instance', () => {
    expect(new Encrypt('password123456')).toBeTruthy();
  });


  it('should create', () => {
    let crypt = new Encrypt('password123456');
    expect(crypt).toBeTruthy();
  });

  it('should Encrypt', () => {
    let crypt = new Encrypt('password123456');
    crypt.set();
    console.log('Encrypted: ' + crypt.encrypted.toString());
    expect(crypt.encrypted).toBeTruthy();

  });

  it('should decrypt', () => {
    let crypt = new Encrypt('password123456');
    crypt.set();
    crypt.get(crypt.num);
    console.log('Decrypted: ' + crypt.decrypted);
    expect(crypt.decrypted).toBe('password123456');

  })
});
