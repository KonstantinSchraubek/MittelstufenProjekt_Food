import { TestBed} from '@angular/core/testing';

import {LoginService} from './login.service';
import {AppModule} from '../app.module';
import {DatabaseService} from './database.service';
import {CookieService} from 'ngx-cookie-service';


let service: LoginService;
let dbservice: DatabaseService;
let cookieservice: CookieService;

describe('LoginService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [AppModule]
    });
    service = TestBed.get(LoginService);
    dbservice = TestBed.get(DatabaseService);
    cookieservice = TestBed.get(CookieService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('functions should be called in cookie and dbservice', () => {
    const spy = spyOn(dbservice, 'disconnectUser');
    service.logoutUser();
    expect(spy).toHaveBeenCalled();
  });

  it('Should set loginfailed to true when dbservice sends false', async () => {
    const spy = spyOn(dbservice, 'authenticateUser').and.returnValue(false);
    await service.checkUser('username', 'passwort');
    expect(spy).toHaveBeenCalled();
    expect(service.loginFailed).toBe(true);
  });
  it('Should set loggedIn to true when dbservice sends true', async () => {
    const spy = spyOn(dbservice, 'authenticateUser').and.returnValue(true);
    await service.checkUser('username', 'passwort');
    expect(spy).toHaveBeenCalled();
    expect(service.loggedIn).toBe(true);
    expect(service.loginFailed).toBe(false);
  });
})
;
