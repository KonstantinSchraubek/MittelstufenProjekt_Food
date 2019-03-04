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
    crypt.set('123456$#@$^@1ERF');
    console.log('Encrypted: ' + crypt.encrypted.toString());

  });

  it('should decrypt', () => {
    let crypt = new Encrypt('password123456');
    crypt.set('123456$#@$^@1ERF');
    crypt.get('123456$#@$^@1ERF');
    console.log('Decrypted: ' + crypt.decrypted.toString());
  })
});
