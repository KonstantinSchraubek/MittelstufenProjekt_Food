import {Benutzer} from './benutzer';

describe('Benutzer', () => {
  it('should create an instance', () => {
    expect(new Benutzer()).toBeTruthy();
  });


  it('should be set/get password', () => {
    const user: Benutzer = new Benutzer();
    user.setPassword('12345');
    expect(user.password).toBe('12345');
  });
  it('should be set/get username', () => {
    const user: Benutzer = new Benutzer();
    user.setUsername('12345');
    expect(user.username).toBe('12345');
  });
  it('should be set/get email', () => {
    const user: Benutzer = new Benutzer();
    user.setEmail('12345@mail.de');
    expect(user.email).toBe('12345@mail.de');
  });
});
