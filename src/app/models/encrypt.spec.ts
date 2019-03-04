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
    let cryp = new Encrypt('password123456');
    cryp.set();
    console.log('Encrypted: ' + cryp.encrypted.toString());
  });

  it('should Decrypt', () => {
    let crypt = new Encrypt('password123456');
    crypt.set();
    crypt.get(crypt.num);
    console.log('Decrypted: ' + crypt.decrypted);
    expect(crypt.decrypted).toBe('password123456');
  })
});
